import { Curved_carrousel } from "../../components/curved_carrousel/curved_carrousel";
import "./Home.css";

import React from "react";

export const Home = () => {
	return (
		<div className="home-container">
			<header>
				<div className="logo">
					<img src="https://img.freepik.com/premium-vector/growing-plant-logo-design_9569-396.jpg?w=2000" alt="logo" />
				</div>
				<ul className="nav">
					<li>Home</li>
					<li>About</li>
					<li>Products</li>
				</ul>
			</header>
			<body>
                <h1>Indoor Plants</h1>
				<div>
					<Curved_carrousel />
				</div>
				{/* <div className="dummy" style={{ backgroundColor: "red", width: "1366px", height:'350px' }}>width: 1366px </div> */}
			</body>
			<footer>
				<p>terms and condition</p>
			</footer>
		</div>
	);
};
