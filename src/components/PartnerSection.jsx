import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { partners } from '../data/PartnerData'


function PartnerSection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="partners-section" id='partners' data-aos="zoom-in">
            <div className="container">
                <h2 className="section-title">{text['partners']}</h2>
                <Slider {...settings} className='partner-slider'>
                    {
                        partners.map((partner, index) => (
                            <div className="partner" key={index}>
                                <img src={partner} alt="partner" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default PartnerSection
