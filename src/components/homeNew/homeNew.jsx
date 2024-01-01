import React from "react";
// import "./homeNew.css";
import Social from "../homeNew/socialNew";
import Data from "../home/Data";
import ScrollDown from "./ScrollDown";

const HomeNew = () => {
	return (
		<section className="home section" id="home">
			<div className="home__container container grid">
				{/* 42:46 */}
				<div className="home__content grid">
					<Social />
					<div className="home__img"></div>
					<Data />
				</div>

				<ScrollDown />
			</div>
		</section>
	);
};

export default HomeNew;
