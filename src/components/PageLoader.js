import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader"; // Import Loader component

const PageLoader = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [fadeOut, setFadeOut] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setLoading(true); // Start loader

		// First delay to show loading effect
		const loadTimer = setTimeout(() => {
			setFadeOut(true); // Begin fade out transition
		}, 500); // Slight delay for smoother transition

		// Second delay to completely remove loader after fade
		const removeLoaderTimer = setTimeout(() => {
			setLoading(false);
			setFadeOut(false); // Reset fade state
		}, 1000); // Give fade-out time before hiding

		return () => {
			clearTimeout(loadTimer);
			clearTimeout(removeLoaderTimer);
		};
	}, [location.pathname]); // Run every time the path changes

	return (
		<>
			{loading && <div className={`loader-container ${fadeOut ? "hide" : ""}`}><Loader /></div>}
			{children} {/* Render content after loader fades out */}
		</>
	);
};

export default PageLoader;
