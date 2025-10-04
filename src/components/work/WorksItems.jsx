import React from "react";

const WorksItems = ({ item }) => {
	return (
		<div className="work__card" key={item.id} data-aos="fade-up">
			<img src={item.image} alt="" className="work__img" />
			<div className="work__data">
				<h3 className="work__title">{item.title}</h3>
				<p className="work__tools">{item.tools}</p>
			</div>
			<div className="work__description">{item.desc}</div>
			{item.link && (
				<a
					href={item.link}
					className="work__button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Demo{" "}
					<i className="bx bx-right-arrow-alt work__button-icon"></i>
				</a>
			)}
		</div>
	);
};

export default WorksItems;
