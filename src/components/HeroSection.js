import React, { useState, useMemo } from "react";
import "../App.css";
import "./HeroSection.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function HeroSection() {
	// ✅ Hooks MUST be defined at the top of the function
	const [showPDF, setShowPDF] = useState(false);

	const [zoomLevel, setZoomLevel] = useState(0.5); // ✅ Track zoom level

	// ✅ Increase Zoom Level
	const handleZoomIn = () => {
		setZoomLevel((prevZoom) => Math.min(prevZoom + 0.25, 3.0)); // Limit to 300%
	};

	// ✅ Decrease Zoom Level
	const handleZoomOut = () => {
		setZoomLevel((prevZoom) => Math.max(prevZoom - 0.25, 0.5)); // Limit to 50%
	};

	// ✅ Ensuring the plugin is always initialized
	const newPlugin = defaultLayoutPlugin();

	return (
		<div className="hero-container">
			<div className="hero-content">
				<h1>VAN VLIMMEREN FEESTVERHUUR</h1>
				<p>
					Welkom bij Van Vlimmeren Feestverhuur.
					<br />
					Neem zeker een kijkje op onze website om erachter te komen <br />
					wat wij kunnen betekenen voor uw feest of evenement.
				</p>
				<button className="hero-button" onClick={() => setShowPDF(true)}>
					CATALOGUS 2025
				</button>
			</div>

			{/* ✅ The plugin is always initialized, but the PDF viewer is conditionally rendered */}
			{showPDF && (
				<div className="pdf-overlay">
					<div className="zoom-controls">
						<span>{Math.round(zoomLevel * 100)}%</span>
						<button onClick={handleZoomOut}>➖ Zoom Out</button>
						<button onClick={handleZoomIn}>➕ Zoom In</button>
						<button
							className="close-pdf-button"
							onClick={() => setShowPDF(false)}>
							❌ Close
						</button>
					</div>

					<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
						<div className="pdf-fullscreen">
							<Viewer
								key={zoomLevel} // ✅ Re-render the PDF viewer when zoom level changes
								fileUrl="/images/catalogus.pdf"
								defaultScale={zoomLevel}
								theme="dark"
							/>
						</div>
					</Worker>
				</div>
			)}
		</div>
	);
}

export default HeroSection;
