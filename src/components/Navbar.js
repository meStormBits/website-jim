import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {
		setClick(false);
		setDropdown(false); // Close dropdown when closing mobile menu
	};

	const toggleDropdown = () => setDropdown(!dropdown);

	// Detect screen size to adjust dropdown behavior
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 960);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img
						src={require("../images/V-2.png")}
						alt="Logo"
						style={{ maxWidth: "64px", maxHeight: "64px" }}
					/>
				</Link>
				<div className="phone-container">
					<i className="fas fa-phone"></i>
					<span>0612345678</span>
				</div>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							HOME
						</Link>
					</li>

					<li className="nav-item dropdown">
						<div className="nav-links" onClick={toggleDropdown}>
							PRODUCTEN <i className="fas fa-caret-down"></i>
						</div>
						<ul className={`dropdown-menu ${dropdown ? "show" : ""} ${isMobile ? "mobile-dropdown" : ""}`}>
							<li>
								<Link to="/producten/led_verlichting" className="dropdown-link" onClick={closeMobileMenu}>
									LED VERLICHTING
								</Link>
							</li>
							<li>
								<Link to="/producten/ballondecoratie" className="dropdown-link" onClick={closeMobileMenu}>
									BALLONDECORATIE
								</Link>
							</li>
							<li>
								<Link to="/producten/photobooth" className="dropdown-link" onClick={closeMobileMenu}>
									PHOTOBOOTH
								</Link>
							</li>
						</ul>
					</li>

					<li className="nav-item">
						<Link to="/bestellen" className="nav-links" onClick={closeMobileMenu}>
							BESTELLEN
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
							CONTACT
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
