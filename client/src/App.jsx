import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="app-container">
			<Home />
		</div>
	);
}

export default App;
