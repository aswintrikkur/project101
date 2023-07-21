import "./curved_carrousel.css";
import React from "react";

export const Curved_carrousel = () => {

	const handleCarrouselSlider=(event,dir)=>{
		// console.log(event.target.style);
		// console.log(event.currentTarget.style);

		let element= document.querySelector('.images')
		// console.log(element);
		// element.scroll({
		// 	// top: 100,
		// 	left: 100,
		// 	// right:-1000,
		// 	behavior: "smooth",
		//   });
		// console.log(element.scrollWidth);
		element.scrollBy({
			left: (dir==='right' ? 200 : -200),
			behavior:"smooth",			
		});
	}

	return (
		<div className="carrousel-container">
			<div className="image-container">
					<div className="extruder extruder-top"></div>
					<button className="btn-left" onClick={(event)=>{handleCarrouselSlider(event,'left')}}> <i className="fa-solid fa-chevron-left " ></i></button>
					<button className="btn-right" onClick={(event)=>{handleCarrouselSlider(event,'right')}}> <i className="fa-solid fa-chevron-right "></i></button>

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

					<div className="extruder extruder-bottom"></div>
			</div>
		</div>
	);
};
