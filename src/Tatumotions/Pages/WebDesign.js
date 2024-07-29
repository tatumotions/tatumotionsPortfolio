import React from 'react';
import "./WebDesign.css";
import Header from "../Scripts/Header";
import Footer from "../Scripts/Footer";

function WebDesign () {
    return (
        <div id="WebDesign" name="WebDesign">
            <Header/>
            <div className="container">
                <h1 className="sub-tittle">Web Design</h1>
            </div> 
            <Footer/>
        </div>
    )
}

export default WebDesign;