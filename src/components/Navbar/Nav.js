import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
import ModeBox from "./ModeBox";
import { lightMode, darkMode } from "./ThemeFunction";

function Nav() {
	const [isModelOpen, setModelOpen] = useState(false);
	const [theme, setTheme] = useState("light");

	const modelStyle = {
		display: isModelOpen ? "block" : "none",
		backgroundColor: theme === "light" ? "#f1eee9" : "#374151"
	};

	useEffect(() => {
		const persistTheme = localStorage.getItem("THEME") || "light";
		console.log(persistTheme);
		if (persistTheme === "light") {
			console.log("Changes to light");
			lightMode();
			setTheme("light");
		}
		if (persistTheme === "dark") {
			console.log("Changes to dark");
			darkMode();
			setTheme("dark");
		}
	}, []);

	function changeTheme(e) {
		const { value } = e.target;
		if (value === "light") {
			setTheme("light");
			lightMode();
			localStorage.setItem("THEME", "light");
			return;
		}
		if (value === "dark") {
			setTheme("dark");
			darkMode();
			localStorage.setItem("THEME", "dark");
			return;
		}
	}
	// #374151; #f1eee9;
	return (
		<nav>
			<div className="heading">
				<p style={{ cursor: "pointer" }}>
					<Link to="/posts">Programming Simplified</Link>
				</p>
			</div>
			<div className="preferences">
				<button onClick={() => setModelOpen((prevValue) => !prevValue)}>
					Preferences
				</button>
				<ModeBox modelStyle={modelStyle} changeTheme={changeTheme} />
			</div>
		</nav>
	);
}

export default Nav;
