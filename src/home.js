
import "./Home.css";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home(){


    return(
        <div>
            <Navbar />

            <div className="homeContentsWrapper">
                <p className="homepageText">welcome to</p>
                <h1 id="homepageText" >straydogphotography</h1>
                <div className="homeOptions"></div>
                    <Link to = "/Gallery " className="homepagePageLink"> <button className="homepagePageButtons">gallery</button> </Link>
                    <Link to = "/about " className="homepagePageLink"> <button className="homepagePageButtons">about</button> </Link>
                    <Link to = "/contact " className="homepagePageLink"> <button className="homepagePageButtons" >contact</button> </Link> 
                </div>
        </div>
        
    );
}

export default Home;