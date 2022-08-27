import React from "react";

function SearchBar() {
	return (
		<div className="search-bar">
			<label htmlFor="search" style={{ fontSize: "1.2rem" }}>
				<strong>Search</strong>
			</label>
			<input type="text" className="form-control" />
		</div>
	);
}

export default SearchBar;
