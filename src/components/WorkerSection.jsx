import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import Slider from 'react-slick'
import { MainContext } from '../context/MainContextProvider'

function WorkerSection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
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

    const {workerArr} = useContext(MainContext);
    
    return (
        <section className="workers-section" data-aos="zoom-in"> 
            <div className="container">
                <h2 className="section-title">{text['doctors_technicians']}</h2>
                <div className="worker-amount"><span className="number">{workerArr.length}</span><span>{text['person']}</span></div>
                <Slider {...settings} className='worker-slider'>
                    {
                        workerArr.map(worker => (
                            <div className="worker-slide" key={worker.id}>
                                <div className="worker-card">
                                    <div className="card-face front">
                                        <img src={worker.img} alt="w-img" />
                                    </div>
                                    <div className="card-face back">
                                        <span className="name">{worker.name}</span>
                                        <span className="position">{text[`${worker.position}`]}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default WorkerSection
