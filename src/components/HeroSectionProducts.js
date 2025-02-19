import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./HeroSectionProducts.css";

function HeroSectionProducts() {
	return (
		<div className="hero-container">
			<div className="hero-content">
				<h1>VAN VLIMMEREN FEESTVERHUUR</h1>
				<Link to="/bestellen">
					<button className="hero-button">
						BESTELLEN
					</button>
				</Link>
			</div>
		</div>
	);
}

export default HeroSectionProducts;
