import "./curved_carrousel.css";
import React from "react";

export const Curved_carrousel = () => {
	return (
		<div className="carrousel-container">
			<div></div>
			<div className="image-container">
					<div className="extruder extruder-top"></div>
					<button> <i className="fa-solid fa-chevron-left"></i></button>

					<div className="images">
						<div className="img1 img"><img src="./images/Frame 2.png" alt="" /></div>
						<div className="img2 img"><img src="./images/Frame 3.png" alt="" /></div>
						<div className="img4 img"><img src="./images/Frame 5.png" alt="" /></div>
						<div className="img3 img"><img src="./images/Frame 4.png" alt="" /></div>
						<div className="img4 img"><img src="./images/Frame 6.png" alt="" /></div>

						<div className="img1 img"><img src="./images/Frame 2.png" alt="" /></div>
						<div className="img2 img"><img src="./images/Frame 3.png" alt="" /></div>
						<div className="img4 img"><img src="./images/Frame 5.png" alt="" /></div>
						<div className="img3 img"><img src="./images/Frame 4.png" alt="" /></div>
						<div className="img4 img"><img src="./images/Frame 6.png" alt="" /></div>
					</div>

					<button> <i className="fa-solid fa-chevron-right"></i></button>
					<div className="extruder extruder-bottom"></div>
			</div>
		</div>
	);
};
