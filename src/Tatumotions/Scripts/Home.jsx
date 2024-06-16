/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Tatumotioons_logo.png"

function Hero(){
    return (
        <div id ="Header">
            <div className="container">
                <nav>
                    <img className="TheLogo" src={tatumotionslogo} alt="logo"/>
                    <ul id="sidemenu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Porfolio</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p>Hello! We are</p>
                    <h1>TATU MOTIONS</h1>
                    <h2>A motion and graphic design studio based in Nairobi Kenya.</h2>
                </div>
                <div className="header-img">
                    <img className= "TheBgImg" src={tatumotionslogo} alt="BgImg"/>
                </div>
            </div>
        </div>
    );
}
export default Hero