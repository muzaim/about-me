import React, { useEffect, useRef, useState } from "react";
import { projectsData, projectNav } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
	const [item, setItem] = useState({
		category: projectNav[0].category,
	});
	const [projects, setProjects] = useState([]);
	const [active, setActive] = useState(0);
	const [isSwitching, setIsSwitching] = useState(false);
	const switchTimer = useRef(null);
	const revealTimer = useRef(null);

	useEffect(() => {
		const newProjects = projectsData.filter((project) => {
			return project.category === item.category;
		});
		setProjects(newProjects);
	}, [item]);

	useEffect(() => {
		return () => {
			window.clearTimeout(switchTimer.current);
			window.clearTimeout(revealTimer.current);
		};
	}, []);

	const handleClick = (category, index) => {
		if (category === item.category || isSwitching) {
			return;
		}

		setIsSwitching(true);

		switchTimer.current = window.setTimeout(() => {
			setItem({ category });
			setActive(index);

			revealTimer.current = window.setTimeout(() => {
				setIsSwitching(false);
			}, 80);
		}, 180);
	};

	return (
		<div>
			<div className="work__filters">
				{projectNav.map((item, index) => {
					return (
						<span
							onClick={() => {
								handleClick(item.category, index);
							}}
							className={`${
								active === index ? "active-work" : ""
							} work__item `}
							key={index}
							data-aos="fade-up"
						>
							{item.name}
						</span>
					);
				})}
			</div>

			<div
				className={`work__container ${
					item.category === "professional"
						? "work__container--professional"
						: ""
				} ${
					isSwitching ? "work__container--switching" : ""
				} container grid`}
			>
				{projects.map((item, index) => {
					return (
						<WorksItems item={item} index={index} key={item.id} />
					);
				})}
			</div>
		</div>
	);
};

export default Works;
