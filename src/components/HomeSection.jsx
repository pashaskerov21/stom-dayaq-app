import React, { useContext } from 'react'
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { MainContext } from '../context/MainContextProvider';

function HomeSection() {
    var settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        prevArrow: <CusttomPrevArrow />,
        nextArrow: <CusttomNexrArrow />,
    };
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    const { bannerSwiperData } = useContext(MainContext);
    return (
        <section className="home-section" id='home'>
            <Slider {...settings} className='banner-slider'>
                {
                    bannerSwiperData.map(data => (
                        <div className="slide-wrapper" key={data.id}>
                            <img src={data.cover} className="cover-img" alt="cover-img" />
                            <div className="content">
                                <div className="container">
                                    <div className="text">
                                        <div className="large-text">
                                            <p>{text[`${data.title}`]}</p>
                                        </div>
                                        <div className="small-text">
                                            <p>{text[`${data.text}`]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}


const CusttomPrevArrow = (props) => {
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow prev`}><i className='fa-solid fa-chevron-left'></i></button>
    )
}
const CusttomNexrArrow = (props) => {
    return (
        <button onClick={props.onClick} className={` custom-slick-arrow next`}><i className='fa-solid fa-chevron-right'></i></button>
    )
}


export default HomeSection
