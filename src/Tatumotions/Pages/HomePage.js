import React from 'react';
import "./HomePage.css";
import Header from "../Scripts/Header";
import Home from"../Scripts/Home";
import Portfolio from "../Scripts/Portfolio";
import Services from "../Scripts/Services";
import WhoAreWe from "../Scripts/WhoAreWe";
import Contactform from "../Scripts/Contactform";


function HomePage  () {
    return (
    <div id = "HomePage" className='App'>
        <div className='Container'>
            <div id='_header'className='TheHeader'><Header /></div>
            <div id='_home'className='TheHome'><Home /></div>
            <div id='_services'className='Theservices'><Services/></div>
            <div id='_portfolio' className='Theportfolio'><Portfolio/></div>
            <div id='WhoAreWe' className='whoarewe'><WhoAreWe/></div>
            <div id='_contactform'className='Thecontactform'><Contactform/></div>
        </div>
    </div>
    );
}

export default HomePage;