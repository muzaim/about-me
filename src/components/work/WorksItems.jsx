import React from "react";
import LearningProject from "./LearningProject";
import ProfessionalProject from "./ProfessionalProject";

const WorksItems = ({ item, index }) => {
	if (item.category === "professional") {
		return <ProfessionalProject item={item} index={index} />;
	}

	return <LearningProject item={item} index={index} />;
};

export default WorksItems;
