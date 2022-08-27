import React from "react";
import { Link } from "react-router-dom";

function Blog({ heading, createdAt, tagLine, description, readMore }) {
	return (
		<>
			<div className="blog mb-5">
				<h2>
					<Link to={readMore}>{heading}</Link>
				</h2>
				<span className="grey-text">{createdAt}</span>
				<p className="tag-line mt-2">{tagLine}</p>
				<p className="description-text">{description}</p>
				<Link to={readMore}>Read More</Link>
			</div>
		</>
	);
}

export default Blog;
