import Nav from "./Navbar/Nav";
import "../css/style.css";
import { Route, Routes } from "react-router-dom";
import Posts from "./Blogs/Posts";
import BangOperatorPost from "./BangOperator/BangOperatorPost";
import React, { useEffect, useState } from "react";
import NullVsUndefined from "./NullVsUndefined/NullVsUndefined";

export const WidthContext = React.createContext();

function App() {
	const [screenWidth, setScreenWidth] = useState(60);

	const widthStyle = {
		width: screenWidth + "rem"
	};

	useEffect(() => {
		const width = localStorage.getItem("WIDTH") || 60;
		setScreenWidth(width);
	}, []);

	return (
		<main className="main" style={widthStyle}>
			<WidthContext.Provider value={setScreenWidth}>
				<Nav />
			</WidthContext.Provider>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/posts" element={<Posts />} />
				<Route
					path="/post/stop_using_bang_operator"
					element={<BangOperatorPost />}
				/>
				<Route path="/post/null_vs_undefined" element={<NullVsUndefined />} />
			</Routes>
		</main>
	);
}

export default App;
