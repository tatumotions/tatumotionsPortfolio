import "./Contactform.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InstagramIcon from "../Images/SocialmediaIcons/instagram.png";
import BehanceIcon from "../Images/SocialmediaIcons/behance.png";
import LinkedinIcon from "../Images/SocialmediaIcons/linkedin.png";
import TiktokIcon from "../Images/SocialmediaIcons/tiktok.png";
import XIcon from "../Images/SocialmediaIcons/twitter.png";
import PhoneIcon from "../Images/SocialmediaIcons/viber.png";
import EmailIcon from "../Images/SocialmediaIcons/telegram.png";
import Footer from "../Scripts/Footer";

const SERVICE_ID = "service_tw94h9g";
const TEMPLATE_ID = "template_r171w3f";
const PUBLIC_KEY = "unXUQX8FhFdRDh3Lw";



function Contactform(){

    const form = useRef();
    const msg = document.getElementById("msg");

    const SendMessage = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            form.current,
            PUBLIC_KEY
            )
            .then((result) => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(function () {
                    msg.innerHTML = " ";
                }, 250)
                console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            });
        e.target.reset()
        };
    return(
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-tittle">Contact Us</h1>
                        <p><img src={EmailIcon}></img>tatumotions@gmail.com</p>
                        <p><img src={PhoneIcon}></img>0123456789</p>
                        <div className="social-icons">
                            <a href=""><img src={InstagramIcon}></img></a>
                            <a href=""><img src={BehanceIcon}></img></a>g
                            <a href=""><img src={LinkedinIcon}></img></a>
                            <a href=""><img src={TiktokIcon}></img></a>
                            <a href=""><img src={XIcon}></img></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form ref={form} onSubmit={SendMessage}>
                            <input type="text" name="Name" placeholder=" Your Name" required/>
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message" required/>
                            <button type="submit" className="btn btn2" value="Send" id="loadButton">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
            
        </div>
    );
}


export default Contactform;
