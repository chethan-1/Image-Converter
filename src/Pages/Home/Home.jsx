import React from "react";
import "./Home.css";
import ImageConverter from "../../Components/ImageConverter/ImageConverter";
const Home = () =>{
    return(
        <div className="Home">
            <div className="Home-Title">
                <hi className="Title-child">Convert any type of image here</hi>
            </div>
            <div className="imageConverter-body">
                <ImageConverter/>
            </div>
            
        </div>
    );
};

export default Home;