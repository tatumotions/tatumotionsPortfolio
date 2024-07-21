import "./Portfolio.css";
import AnimationIcon from "../Images/animate.png";
import GraphicDesignIcon from "../Images/vector.png";
import WebDesignIcon from "../Images/user-experience.png";
import {useNavigate} from "react-router-dom";
function Portfolio(){
    const navigate = useNavigate();

    return(
        <div id="Portfolio" name="Portfolio">
            <div className="container">
                <h1 className="sub-tittle">Portfolio</h1>
                <div className="Portfolio-list">
                    <div>
                        <img className="icon" src={AnimationIcon} alt="List_icon"/>
                        <h2>Animation</h2> 
                        <button>
                            <a onClick ={() =>navigate("/Animation")}>Explore</a> 
                        </button>
                        
                    </div>
                    <div>
                        
                        <img className="icon" src={GraphicDesignIcon} alt="List_icon"/>  
                        <h2>Graphic Design</h2>
                        <button>
                            <a onClick ={() =>navigate("/GraphicDesign")}>Explore</a> 
                        </button>
                    </div>
                    <div>
                        
                        <img className="icon" src={WebDesignIcon} alt="List_icon"/>  
                        <h2>Ux/UI & Web Design</h2>
                        <button>
                            <a onClick ={() =>navigate("/WebDesign")}>Explore</a> 
                        </button> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;
