/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Tatumotioons_logo.png"

function Hero(){
    return (
        <div id ="Header">
            <div className="container">
                <div className="row">
                    <div className="header-img">
                        <img className= "TheBgImg" src={tatumotionslogo} alt="BgImg"/>
                    </div>
                    <div className="header-text">
                        <p>Hello! We are</p>
                        <h1>TATU MOTIONS</h1>
                        <h2>A motion and graphic design studio based in Nairobi Kenya.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero