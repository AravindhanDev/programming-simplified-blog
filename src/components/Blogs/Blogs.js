import React from "react";
import blogPostsPreview from "./BlogsData";
import Blog from "./Blog";

function Blogs() {
	return (
		<>
			<div className="blogs mt-5">
				{blogPostsPreview.map((blog, index) => {
					return (
						<Blog
							key={index}
							heading={blog.heading}
							createdAt={blog.createdAt}
							tagLine={blog.tagLine}
							description={blog.description}
							readMore={blog.readMore}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Blogs;
