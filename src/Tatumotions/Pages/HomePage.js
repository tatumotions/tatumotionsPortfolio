import React from 'react';
import "./HomePage.css";
import Header from "../Scripts/Header";
import Home from"../Scripts/Home";
import Portfolio from "../Scripts/Portfolio";
import Services from "../Scripts/Services";
import WhoAreWe from "../Scripts/WhoAreWe";
import Contactform from "../Scripts/Contactform";
import Footer from "../Scripts/Footer";

function HomePage  () {
    return (
    <div id = "HomePage" className='App'>
        <div className='Container'>
            <div className='TheHeader'>
                <Header />
            </div>
            <Home />
            <Services/>
            <Portfolio/>
            <div id='WhoAreWe' className='whoarewe'>
                <WhoAreWe/>
            </div>
            <Contactform/>
            <div className='TheFooter'>
                <Footer/>
            </div>
        </div>
    </div>
    );
}

export default HomePage;