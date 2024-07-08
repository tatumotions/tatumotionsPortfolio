import "./Services.css";

function Services(){
    return(
        <div id="services" name="services">
            <div className="container">
                <h1 className="sub-tittle">Services</h1>
                <div className="services-list">
                    <div>
                        <h2>Animation</h2>
                        <p>Our services offer innovative 2D and 3D visualizations, specializing in character animation, 
                            motion graphics, and storytelling, blending creativity with technological expertise to create captivating narratives.</p>
                        <a href="#contact">Learn more</a>
                    </div>
                    <div>
                        <h2>Graphic Design</h2>
                        <p>Our services enhance brand visual appeal, creating unified identities, logos, and marketing materials. 
                            My designs impact from conception to completion, transforming ideas into compelling narratives.</p>
                        <a href="#contact">Learn more</a>
                    </div>
                    <div>
                        <h2>Ux/UI & Web Design</h2>
                        <p>Our services enhance digital experiences, combining user-centric design concepts for enthralling 
                            and engaging experiences, including responsive web design and app interfaces.</p>
                        <a href="#contact">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;
