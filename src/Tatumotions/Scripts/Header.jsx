/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Tatumotioons_logo.png"
import {useNavigate} from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    return(
        <div id ="Header">
            <div className="container">
                <nav>
                    <a href="#" onClick ={() =>navigate("/")} >
                        <img className="TheLogo" src={tatumotionslogo} alt="logo"/>
                    </a>
                    <ul id="sidemenu">
                        <li><a href="#" onClick ={() =>navigate("/")}>Home</a></li>
                        <li><a href="#services" onClick ={() =>navigate("/")}>Services</a></li>
                        <li><a href="#Portfolio" onClick ={() =>navigate("/")}>Porfolio</a></li>
                        <li><a href="#WhoAreWe" onClick ={() =>navigate("/")}>About</a></li>
                        <li><a href="#contact" onClick ={() =>navigate("/")}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;