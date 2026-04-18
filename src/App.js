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
import AOS from "aos";
import Lenis from "lenis";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

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

	const toggleTheme = () => {
		setTheme((currentTheme) =>
			currentTheme === "dark" ? "light" : "dark"
		);
	};

	return (
		<>
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
		</>
	);
}

export default App;
