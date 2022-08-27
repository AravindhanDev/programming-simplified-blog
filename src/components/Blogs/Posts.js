import React from "react";
import SearchBar from "./SearchBar";
import "../../css/blogs.css";
import Blogs from "./Blogs";

function Posts() {
	return (
		<div className="posts">
			<SearchBar />
			<Blogs />
		</div>
	);
}

export default Posts;
