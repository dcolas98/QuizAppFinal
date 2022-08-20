import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/newlogo.png"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
            <img className="img1" src={img}/>
			</Link>
			<div className="ml-auto">
			
				<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
				
			</div>
		</nav>
	);
};
