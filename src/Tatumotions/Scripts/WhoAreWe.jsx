/* eslint-disable no-restricted-globals */
import './WhoAreWe.css';
import background from "../Images/Background/Whoarewe.png"

function WhoAreWe(){
    return(
        <div id ="whoarewe-Header" 
        // style = {{backgroundImage:`url(${background})`,
        //             backgroundRepeat: 'no-repeat',
        //             backgroundSize:'cover'}}
        >
            <div className="container">
                <h1 className="sub-tittle">Who Are We?</h1>
                <div className="WhoAreWe-Content">
                    <p>
                        Looking for an innovative and creative way to bring your brand to life? Look no further
                        than TATU MOTIONS! Our motion graphics and animation production company, based in
                        Nairobi, Kenya, is the brainchild of three talented creatives. We specialize in crafting
                        interactive strategies that humanize brands, connecting them with their audience in a
                        meaningful way. Using cutting-edge marketing research, data analysis, and strategic
                        planning, we transform your brand strategy into a stunning visual experience through
                        animation and motion graphics. Our goal is to empower businesses with the tools they
                        need to stand out in a competitive market and build a successful portfolio of case studies
                        and data analysis. Trust Tatu Motions to bring your brand to life and make an impact that
                        lasts!
                    </p>
                </div>
            </div>
        </div>
    );
}
export default WhoAreWe;