import React from "react";

function PreferenceTheme({ changeTheme, setNegOne, removeNegOne }) {
	return (
		<>
			<div className="pt-2 preferences-theme">
				<label className="preference-label">
					<strong>Theme</strong>
				</label>
				<select
					className="form-select mt-1"
					onChange={changeTheme}
					onFocus={setNegOne}
					onBlur={removeNegOne}
				>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
				</select>
			</div>
		</>
	);
}

export default PreferenceTheme;
