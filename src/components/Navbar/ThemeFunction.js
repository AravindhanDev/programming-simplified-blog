export function lightMode() {
	document.documentElement.style.setProperty("--primary-text-color", "#161A1D");
	document.documentElement.style.setProperty("--primary-bg-color", "#fff");
	document.documentElement.style.setProperty("--grey-text-color", "#7f7c82");
	document.documentElement.style.setProperty("--desc-text-color", "#423f3e");
	document.documentElement.style.setProperty("--span-text-color", "#e5e7eb");
}

export function darkMode() {
	document.documentElement.style.setProperty("--primary-text-color", "#fff");
	document.documentElement.style.setProperty("--primary-bg-color", "#161A1D");
	document.documentElement.style.setProperty("--grey-text-color", "#eee");
	document.documentElement.style.setProperty("--desc-text-color", "#eee");
	document.documentElement.style.setProperty("--span-text-color", "#374151");
}
