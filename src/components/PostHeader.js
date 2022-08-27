import React from "react";
import SocialLinks from "./SocialLinks";

function PostHeader({ heading, createdAt, tagLine, url }) {
	return (
		<>
			<div className="post-header">
				<h2>{heading}</h2>
				<span className="grey-text">{createdAt}</span>
				<p className="tag-line mt-2">{tagLine}</p>
				<SocialLinks text={heading} url={url} />
			</div>
		</>
	);
}

export default PostHeader;
