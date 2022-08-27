import React from "react";
import PreferenceTheme from "./PreferenceTheme";
import PreferenceWidth from "./PreferenceWidth";

function ModeBox({ modelStyle, changeTheme }) {
	function setNegOne(e) {
		e.target.selectedIndex = -1;
	}
	function removeNegOne(e) {
		e.target.selectedIndex = 0;
	}

	return (
		<>
			<div style={modelStyle} className="preferences-box">
				<PreferenceTheme
					changeTheme={changeTheme}
					setNegOne={setNegOne}
					removeNegOne={removeNegOne}
				/>
				<PreferenceWidth />
			</div>
		</>
	);
}

export default ModeBox;
