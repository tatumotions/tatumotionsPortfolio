import React from 'react';
import "./GraphicDesign.css";
import Header from "../Scripts/Header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../Images/Carousel/1.png";
import img2 from "../Images/Carousel/2.png";
import img3 from "../Images/Carousel/3.png";
import img4 from "../Images/Carousel/4.png";
import img5 from "../Images/Carousel/5.png";
import img6 from "../Images/Carousel/6.png";
import img7 from "../Images/Carousel/7.png";
import img8 from "../Images/Carousel/8.png";
import img9 from "../Images/Carousel/9.png";
import img10 from "../Images/Carousel/10.png";
import Footer from '../Scripts/Footer';


function GraphicDesign  ()  {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 ,
            partialVisibilityGutter: 20
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 ,
            partialVisibilityGutter: 10
        }
    };

    return (
        <div id ="GraphicDesign" name ="GraphicDesign">
            <Header/>
            <div className="container">
                <h1 className="sub-tittle">GraphicDesign</h1>
                <div className="Img_carousel">
                    <Carousel 
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={true}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass="TheCarousel"
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={2}
                        swipeable
                        responsive = {responsive}>
                            <div><img className="TheImg" src ={img1} alt=''/></div>
                            <div><img className="TheImg" src ={img2} alt=''/></div>
                            <div><img className="TheImg" src ={img3} alt=''/></div>
                            <div><img className="TheImg" src ={img4} alt=''/></div>
                            <div><img className="TheImg" src ={img5} alt=''/></div>
                            <div><img className="TheImg" src ={img6} alt=''/></div>
                            <div><img className="TheImg" src ={img7} alt=''/></div>
                            <div><img className="TheImg" src ={img8} alt=''/></div>
                            <div><img className="TheImg" src ={img9} alt=''/></div>
                            <div><img className="TheImg" src ={img10} alt=''/></div>
                    </Carousel>
                </div>
            </div> 
            <Footer/>
        </div>
    )
}

export default GraphicDesign;
