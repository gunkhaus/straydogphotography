
import "./Home.css";
import Navbar from "./navbar";
import { useEffect, useState } from "react";


function Home(){


    return(
        <div>
            <Navbar />

            <div className="homeContentsWrapper">
                <div className="homeImageWrapper">
                    <img className="homePortrait" src={`${process.env.PUBLIC_URL}/otherPhotos/homePortrait.png`} />
                </div>
                
            </div>
        </div>
        
    );
}

export default Home;