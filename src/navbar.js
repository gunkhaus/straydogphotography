import React, { useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Navbar(){
    const menuRef = useRef();
    

    function showMenu() {
      if (menuRef.current) {
        menuRef.current.classList.toggle("show");
      }
    }

    return (
        <div className="navbar">

            <div className="dropdown">
                <button id="dropdownButton" onClick={showMenu}>Menu</button>
                    <ul ref={menuRef} id="dropdownMenu"> 
                            <li id="contactButton" className="pageLinks"><Link to = "/contact " > <button className="navButton" >contact</button> </Link></li>  
                            <li id="aboutButton" className="pageLinks"><Link to = "/about " > <button className="navButton">about</button> </Link></li>
                            <li id="galleryButton" className="pageLinks"><Link to = "/Gallery " > <button className="navButton" >gallery</button> </Link></li>
                            <li id="homeButton" className="pageLinks"><Link to = "/ "> <button className="navButton" >home</button> </Link></li>
                        </ul>
            </div>
            
            <div className="websiteTitle">
                <h1 id="mainTitle">STRAY DOG PHOTOGRAPHY</h1>
            </div>

            <div className="contactNavbar">
                <ul>
                    <li> <button className="pageLinks"  id="dropdownButton"><a href="https://www.instagram.com/stray.dog.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img id="socialButton" src={`${process.env.PUBLIC_URL}/otherPhotos/instagramLogo.png`} alt="Instagram logo" /></a> </button> </li>
                      
                </ul>
            </div>

            
            
        </div>  
    );
}

export default Navbar;
