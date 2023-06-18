import React from 'react'
import logo from '../image/logo/logo.png'
import nettyLogo from '../image/footer/netty2022.jpg'
import { useSelector } from 'react-redux'

function ContactSection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    return (
        <section className="contact-section" id='contact'>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title white">{text['contact']}</h2>
                    </div>
                    <div className="col-12 col-lg-3 left-col ">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 contact-col" data-aos="zoom-in-down">
                        <div className="contact-wrapper">
                            <div className="link">
                                <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                                <span className="label">AZ5000, Sumqayıt şəhəri, Səməd Vurğun küç. 101-131</span>
                            </div>
                            <div className="link">
                                <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                <span className="label">+994 50 440-32-55</span>
                            </div>
                            <div className="link">
                                <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                <span className="label">info@dayaq.az</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3  right-col">
                        <div className="sosial-icons">
                            <div className='link'><i className="fa-brands fa-facebook-f"></i></div>
                            <div className='link'><i className="fa-brands fa-instagram"></i></div>
                            <div className='link'><i className="fa-brands fa-youtube"></i></div>
                        </div>
                        <div className="card-link"><img src={nettyLogo} alt="netty" /></div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection
