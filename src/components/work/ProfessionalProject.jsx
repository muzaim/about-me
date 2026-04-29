import React from "react";

const ProfessionalProject = ({ item, index }) => {
	return (
		<div
			className="work__card work__card--professional reveal-card"
			data-aos="card-reveal"
			data-aos-delay={index * 180}
			data-aos-duration="820"
			data-aos-anchor-placement="top-bottom"
		>
			<div className="work__professional-header">
				<div className="work__company-profile">
					<div
						className={`work__company-logo ${
							item.logoVariant
								? `work__company-logo--${item.logoVariant}`
								: ""
						}`}
					>
						{item.logo ? (
							<img
								src={item.logo}
								alt={`${item.company} logo`}
								className="work__company-logo-img"
							/>
						) : (
							<span>{item.companyInitial}</span>
						)}
					</div>

					<div>
						<h3 className="work__title">{item.projectName}</h3>
						<p className="work__company">{item.company}</p>
					</div>
				</div>

				<div className="work__professional-meta">
					<span>{item.tools}</span>
					<span>{item.duration}</span>
				</div>
			</div>

			<ul className="work__responsibilities">
				{item.responsibilities.map((responsibility) => (
					<li key={responsibility}>{responsibility}</li>
				))}
			</ul>
		</div>
	);
};

export default ProfessionalProject;
