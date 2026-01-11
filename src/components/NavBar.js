import { useState } from "react";
import logo from "../assets/logos/logo_horizontalpurple.svg";

const NavBar = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const navLinks = [
		{ navLink: "#about", name: "About" },
		{ navLink: "#supporters", name: "Supporters" },
		{ navLink: "#nonprofits", name: "Non-Profits" },
		{ navLink: "#team", name: "Team" },
		{ navLink: "#register", name: "Register", solid: true },
	];

	return (
		<header className="NavBar">
			<a href="#main" className="skip-links">
				Skip to content.
			</a>

			<nav className="max-width">
				{/* Navigation Logo */}
				<a href="/">
					<img className="nav-logo" src={logo} alt="AdaHacks Logo" />
				</a>

				{/* Hamburger button */}
				<button
					className={`hamburger-button ${hamburgerOpen ? "open" : ""}`}
					onClick={() => {
						setHamburgerOpen((prevState) => !prevState);
					}}
					aria-hidden="true"
				>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</button>

				{/* Navigation Links */}
				<ul className={`nav-links ${hamburgerOpen ? "open" : ""}`}>
					{navLinks.map(({ navLink, name, solid }, i) => (
						<li className="nav-link" key={i}>
							<a className={solid && "solid"} href={navLink}>
								{name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default NavBar;
