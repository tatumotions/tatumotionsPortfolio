/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Tatumotioons_logo.png"

function Header(){
    return(
        <div id ="Header">
            <div className="container">
                <nav>
                    <a href="#">
                        <img className="TheLogo" src={tatumotionslogo} alt="logo"/>
                    </a>
                    <ul id="sidemenu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#Portfolio">Porfolio</a></li>
                        <li><a href="#WhoAreWe">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;