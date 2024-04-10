import React from "react"
import { BrowserRouter as Link } from "react-router-dom"
import Rightimg from './imgs/food.png'
import img1 from './imgs/pro1.png'
import img2 from './imgs/pro2.png'
import img3 from './imgs/pro3.png'
import img4 from './imgs/plus.jpg'
import star from './imgs/star.png'
import play from './imgs/play.png'
import leaf1 from './imgs/leaf.png'
import leaf2 from './imgs/leaf2.png'
//slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NewRelease } from "./foody.jsx";
function Foody() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 5,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1500,

        };
        const settings1 = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 1500,

        };
        return (
            <div>
                <div className="leafmain">
                <img className="leaf1" src={leaf1} />
                <img className="leaf2" src={leaf2} />
                <img className="leaf3" src={leaf2} />
                <img className="leaf4" src={leaf1} />
                </div>
                <div className="foody_main">
                    <div className="foody_submain1">
                        <h2>
                            it's not just food ,it's an experience
                        </h2>
                        <div className="btnmain">
                            <button className="btn1">Get Started</button><button className="btn2"><img src={play} /> Watch Video</button><br />
                        </div><p> Our Happy Customer</p>
                        <div className="customer">
                            <img src={img1} />
                            <img src={img2} />
                            <img src={img3} />
                            <img src={img4} />
                        </div>
                        <div className="star">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <button className="btn">5%<br />Discount</button>

                        </div>

                    </div>
                    <div className="foody_submain2">

                        <img src={Rightimg} />

                    </div>
                </div>

                <Slider {...settings}>
                    {
                        NewRelease.map((p) => (
                            <div >
                                <div className="slider">
                                    <img src={p.img} />
                                    <div className="contentslider">
                                        <p > {p.name1}</p>
                                        <p > {p.name2}</p>
                                        <p > {p.name3}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <Slider {...settings1}>
                    {
                        NewRelease.map((p) => (
                            <div >
                                <div className="slider_res ">
                                    <img src={p.img} />
                                    <div className="contentslider">
                                        <p > {p.name1}</p>
                                        <p > {p.name2}</p>
                                        <p > {p.name3}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </div>
        )
    }


export default Foody