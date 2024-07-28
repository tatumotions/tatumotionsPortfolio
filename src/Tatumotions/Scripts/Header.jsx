/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import tatumotionslogo from "../Images/Logo/Tatumotioons_logo.png"
import {useNavigate} from "react-router-dom";
import options from "../Images/Icons/setting.png";
import cancel from "../Images/Icons/close.png";

function Header(){
    const navigate = useNavigate();

    const HandleClick= () =>{
        const sidemenu = document.getElementById("sidemenu");
        if(sidemenu){
            if(sidemenu.style.right< "0px"){
                sidemenu.style.right = "0px";
            }
            else if(sidemenu.style.right>= "0px"){
                sidemenu.style.right = "-200px";
            }
        }
    }

    return(
        <div id ="Header">
            <div className="container">
                <nav>
                    <a href="#" onClick ={() =>navigate("/")} >
                        <img className="TheLogo" src={tatumotionslogo} alt="logo"/>
                    </a>
                    <a onClick ={HandleClick}>
                        <img className="TheSideMenu" src={options} alt="logo"/>
                    </a>
                    <ul id="sidemenu">
                        <li><a href="#" onClick ={() =>navigate("/")}>Home</a></li>
                        <li><a href="#services" onClick ={() =>navigate("/")}>Services</a></li>
                        <li><a href="#Portfolio" onClick ={() =>navigate("/")}>Porfolio</a></li>
                        <li><a href="#WhoAreWe" onClick ={() =>navigate("/")}>About</a></li>
                        <li><a href="#contact" onClick ={() =>navigate("/")}>Contact</a></li>
                        <li className="closebtn">
                            <a onClick ={HandleClick} >
                                <img className="TheSideMenu" src={cancel} alt="logo"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;