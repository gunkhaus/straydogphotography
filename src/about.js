
import "./Home.css";
import Navbar from "./navbar";

function About() {

    return (
        <div className="entirePageContainerAbout">
            <Navbar />
            <div className="contentContainerAbout">
                <div className="aboutText">
                    
                    <p id="aboutPassage">
                    <h2 id="aboutHeader">About</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="aboutImage">
                    <img className="aboutPic" src={`${process.env.PUBLIC_URL}/otherPhotos/aboutSlideshowPics/photoOne.png`} alt="jacksonOne" />
                </div>
            </div>
        </div>
    );
}

export default About;
