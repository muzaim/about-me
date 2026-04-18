import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import CustomCursor from "./components/cursor/CustomCursor";
import AOS from "aos";
import Lenis from "lenis";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function App() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme;
		}

		return window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	});
	const [showIntro, setShowIntro] = useState(true);
	const [isIntroClosing, setIsIntroClosing] = useState(false);

	useEffect(() => {
		AOS.init({
			duration: 900,
			offset: 40,
			once: true,
			easing: "cubic-bezier(0.22, 1, 0.36, 1)",
		});
	}, []);

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.1,
			smoothWheel: true,
			smoothTouch: false,
		});

		let animationFrameId;

		const raf = (time) => {
			lenis.raf(time);
			animationFrameId = window.requestAnimationFrame(raf);
		};

		animationFrameId = window.requestAnimationFrame(raf);

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			lenis.destroy();
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle("dark-theme", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		const closeIntroTimer = window.setTimeout(() => {
			setIsIntroClosing(true);
		}, 3200);

		const hideIntroTimer = window.setTimeout(() => {
			setShowIntro(false);
		}, 3900);

		return () => {
			window.clearTimeout(closeIntroTimer);
			window.clearTimeout(hideIntroTimer);
		};
	}, []);

	useEffect(() => {
		document.body.classList.toggle("intro-active", showIntro);

		return () => {
			document.body.classList.remove("intro-active");
		};
	}, [showIntro]);

	const toggleTheme = () => {
		setTheme((currentTheme) =>
			currentTheme === "dark" ? "light" : "dark"
		);
	};

	return (
		<>
			<CustomCursor />
			{showIntro && (
				<div
					className={`intro-screen ${
						isIntroClosing ? "intro-screen--exit" : ""
					}`}
					aria-live="polite"
				>
					<div className="intro-screen__content">
						<p className="intro-screen__eyebrow">
							Personal Portfolio
						</p>
						<h1 className="intro-screen__title">
							<TypeAnimation
								sequence={["Syafri Surya"]}
								speed={1}
								cursor={true}
								repeat={0}
								className="intro-screen__title-text"
							/>
						</h1>
						<p className="intro-screen__subtitle">
							FULLSTACK DEVELOPER
						</p>
					</div>
				</div>
			)}

			<div
				className={`app-shell ${
					showIntro
						? isIntroClosing
							? "app-shell--revealing"
							: "app-shell--hidden"
						: "app-shell--ready"
				}`}
			>
				{/* MENIT KE 2:26:00 */}
				{/* https://www.youtube.com/watch?v=3aCoZudPEKE */}
				{/* setelah qualification : https://www.youtube.com/watch?v=lvqsSNvfcMo */}
				{/* YANG BAHAYA = SKILL */}
				<Header theme={theme} onToggleTheme={toggleTheme} />
				<main className="main">
					<Home />
					<About />
					<Skills />
					<Services />
					<Qualification />
					<Work />
					{/* <Testimonials /> */}
					<Contact />
				</main>
				<Footer />
				<ScrollUp />
			</div>
		</>
	);
}

export default App;
