import { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "./navbar";
import "./gallery.css";

function Gallery() {
    //useStates to store lines from gallery.txt and store titles parsed from those strings
    const [lines, setLines] = useState([]);
    const [titles, setTitles] = useState([]);
    var totalImages = 0;

    useEffect(() => {
        
        fetch(`${process.env.PUBLIC_URL}/gallery.txt`)
        //if file not found throw error elsewise return gathered text
            .then((response) => {
                if (!response.ok) {
                     throw new Error('file gallery.txt not found.');
                }
                    return response.text();
                })
            .then((text) => {
                //Divvy up text for each newline or return
                const allLines = text.split(/\r?\n/);
                //update Lines array by adding the split lines to each seperate index 
                setLines(allLines);
                //use map to "index" through all the gathered lines and return the name of the image.
                //image directory and file type is removed by substring function
                const titleParse = allLines.map(line => line.substring(15, line.length-4) )
                setTitles(titleParse);

                //The "lines" and the "titles" have an equal index and correspond to each other. 
                //This is used in the useEffect() below to retrieve the correct title and src path.
            })
        }, []);

        //use the total gathered src's to set the amount of total
        totalImages = lines.length;
        //set an array that will be filled of divs generated and pushed to the webpage
        let tableCells = []; 
        //using the amount of totalImages, make a td cell that contains information to display an image, and push it to the page.
            for (let i = 0; i < totalImages; i++) {
                if (i==0 || i%4==0){
                    tableCells.push(<tr></tr>);
                }
                //push a cell to the webpage contained the images in order of gallery.txt
                //image src is provided through indexing lines array formed earlier.
                tableCells.push(
                        <td key={i}>
                            <div id="galleryPictureAndTitle">
                                <button id="galleryPictureButton" alt={`Gallery ${i + 1}`}>
                                    <img className="galleryImg" id="galleryPicture" src={`${process.env.PUBLIC_URL}${lines[i]}`} /> 
                                    
                                </button> 
                            </div>
                        </td>
                );
                
            }

    
            useEffect(() => {
                //variables to acsess the div that holds the big image and the close button
                var bigImage = document.getElementById('bigImageDiv');
                var span = document.getElementsByClassName("close")[0];
                //onClick of the close button, close the big image
                span.onclick = function() { 
                    bigImage.style.display = "none";
                }

                //var to get all of the GALLERY images
                var images = document.getElementsByClassName("galleryImg")
                //var that retrieves the element containing the img tag that holds the big image src
                var modalImg = document.getElementById("img01");
                //var that retrieves the element that displays the caption under the big image 
                var captionText = document.getElementById("caption");

                //for each gallery image, use index i to find which one was clicked by gathering them in order of appearance.
                for (let i = 0; i < images.length; i++) {
                    //on click of a specific image, make the bigImage div visible, and set the src to the specific image clicked
                    //also make the caption the parsed title of the given image clicked.
                    images[i].onclick = function(){
                        bigImage.style.display = "block";
                        modalImg.src = this.src;
                        modalImg.alt = this.alt;
                        captionText.innerHTML=titles[i];
                    }
                }
        //this useEffect MUST execute after titles are gathered- otherwise titles appear as undefined. 
        },[titles]);

    return (
        <div className="entirePageContainerGallery">
            <Navbar />
            <div id="galleryContainer">
                <table className="galleryTable">
                    <tbody>               
                            {tableCells}
                    </tbody>
                </table>
            </div>
            <div id="bigImageDiv" className="bigImageWindow">
                <span class="close">×</span>
                <img class="bigImageWindow-content" id="img01"></img>
                <div id="caption"></div>
            </div>
        </div>
    );
}

export default Gallery;
