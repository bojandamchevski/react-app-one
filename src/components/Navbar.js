import React from "react";
import LogoImage from "../images/airbnb_logo_detail.jpg";

export default function Navbar(){
    return(
        <nav className="navContainer">
            <img src={LogoImage} alt="logo"></img>
            <ul className="navList">
                <li className="navElement"><a>Home</a></li>
                <li className="navElement"><a>About</a></li>
                <li className="navElement"><a>Contact</a></li>
            </ul>
        </nav>
    );
};