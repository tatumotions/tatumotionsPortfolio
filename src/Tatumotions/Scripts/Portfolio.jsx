import "./Portfolio.css";
import AnimationIcon from "../Images/animate.png";
import GarphicDesignIcon from "../Images/vector.png";
import WebDesignIcon from "../Images/user-experience.png";

function Portfolio(){
    return(
        <div id="Portfolio" name="Portfolio">
            <div className="container">
                <h1 className="sub-tittle">Portfolio</h1>
                <div className="Portfolio-list">
                    <div>
                        
                        <img className="icon" src={AnimationIcon} alt="List_icon"/>
                        <h2>Animation</h2>  
                    </div>
                    <div>
                        
                        <img className="icon" src={GarphicDesignIcon} alt="List_icon"/>  
                        <h2>Graphic Design</h2>
                    </div>
                    <div>
                        
                        <img className="icon" src={WebDesignIcon} alt="List_icon"/>  
                        <h2>Ux/UI & Web Design</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
