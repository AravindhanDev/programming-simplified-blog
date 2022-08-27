import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Router>
		<App />
	</Router>
);
