import React from "react";
import "./TextCard.css";
import "../App.css";

function TextCard({ imageUrl, title, text }) {
	return (
		<div className="text-card">
			<div className="image-container">
				<img src={imageUrl} alt="Food" className="card-image" />
				<div className="overlay-text">
					<h2>{title}</h2>
					<p>
						{text.split("\n").map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}

export default TextCard;
