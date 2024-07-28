import React from 'react';
import "./Animation.css";
import Header from "../Scripts/Header";
import Footer from '../Scripts/Footer';
import Video1 from "../Videos/Ad.mp4";
import Video2 from "../Videos/Building.mp4";
import Video5 from "../Videos/Nairobi.mp4";

function Animation  () {
    return (
        <div id="Animation" name="Animation">
            <Header/>
            <div className="container">    
                <h1 className="sub-tittle">Animation</h1>
                <div className="Animation-list">
                    <div>
                        <video controls>
                            <source src ={Video1}/>
                        </video>
                    </div>
                    <div>
                        <video controls>
                            <source src ={Video2}/>
                        </video>
                    </div>
                    <div> 
                        <video controls>
                            <source src ={Video5}/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animation;