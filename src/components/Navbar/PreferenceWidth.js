import React, { useContext } from "react";
import { WidthContext } from "../App";

function PreferenceWidth() {
	const setScreenWidth = useContext(WidthContext);

	function handleChange(e) {
		if (e.target.value === "narrow") {
			setScreenWidth(40);
			localStorage.setItem("WIDTH", 40);
		} else if (e.target.value === "wide") {
			setScreenWidth(80);
			localStorage.setItem("WIDTH", 80);
		} else {
			setScreenWidth(60);
			localStorage.setItem("WIDTH", 60);
		}
	}

	return (
		<>
			<div className="pt-2 preferences-width">
				<label className="preference-label">
					<strong>Reading Width</strong>
				</label>
				<select
					className="form-select mt-1"
					defaultValue={"default"}
					onChange={handleChange}
				>
					<option value="default" defaultValue={"default"}>
						Default
					</option>
					<option value="narrow">Narrow</option>
					<option value="wide">Wide</option>
				</select>
			</div>
		</>
	);
}

export default PreferenceWidth;
