import React from 'react'
import cover_1 from '../image/banner/cover-1.jpg'
import cover_2 from '../image/banner/cover-2.jpg'
import cover_3 from '../image/banner/cover-3.jpg'
import Slider from 'react-slick';
import { useSelector } from 'react-redux';

function HomeSection() {
    var settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        prevArrow: <CusttomPrevArrow/>,
        nextArrow: <CusttomNexrArrow/>,
    };
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    return (
        <section className="home-section" id='home'>
            <Slider {...settings} className='banner-slider'>
                <div className="slide-wrapper">
                    <img src={cover_1} className="cover-img" alt="cover-img" />
                    <div className="content">
                        <div className="container">
                            <div className="text">
                                <div className="large-text">
                                    <p>{text['banner_title_1']}</p>
                                </div>
                                <div className="small-text">
                                    <p>{text['banner_text_1']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-wrapper">
                    <img src={cover_2} className="cover-img" alt="cover-img" />
                    <div className="content">
                        <div className="container">
                            <div className="text">
                                <div className="large-text">
                                    <p>{text['banner_title_2']}</p>
                                </div>
                                <div className="small-text">
                                    <p>{text['banner_text_2']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide-wrapper">
                    <img src={cover_3} className="cover-img" alt="cover-img" />
                    <div className="content">
                        <div className="container">
                            <div className="text">
                                <div className="large-text">
                                    <p>{text['banner_title_3']}</p>
                                </div>
                                <div className="small-text">
                                    <p>{text['banner_text_3']}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}


const CusttomPrevArrow = (props) =>{
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow prev`}><i className='fa-solid fa-chevron-left'></i></button>
    )
}
const CusttomNexrArrow = (props) =>{
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow next`}><i className='fa-solid fa-chevron-right'></i></button>
    )
}


export default HomeSection
