/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Tatumotioons_logo.png"

function Header(){
    return(
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
            </div>
        </div>
    );
}

export default Header;