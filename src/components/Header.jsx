import React, { useState } from 'react'
import logo from '../image/logo/logo.png'
import { Link } from 'react-scroll';
import LanguageLinks from './LanguageLinks';
import { useSelector } from 'react-redux';

function Header() {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const [fixed, setFixed] = useState(false)
    window.addEventListener('scroll', function () {
        if (this.scrollY > 300) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    })

    const navLinks = ['home', 'about', 'appeal', 'partners', 'gallery', 'report', 'contact']

    const handleNavLinkClick = (link) => {
        setMenu(false)
        document.title = `${text[`${link}`]}`
        setTimeout(() => {
            document.title = 'Stomatoloji Dayaq Layihəsi'
        }, 3000)
    }

    const language = useSelector(state => state.language.language);
    const text = require(`../lang/${language}.json`);
    
    return (
        <header className={fixed ? 'fixed-top' : null} id='header'>
            <nav className='general-nav'>
                <div className="container">
                    <div className="inner">
                        <Link offset={-100} to='home' className="logo">
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className={menu ? 'menu active' : 'menu'}>
                            <div className="nav-links">
                                {
                                    navLinks.map((link, index) => (
                                        <Link key={index} onClick={() =>handleNavLinkClick(link) } className='link' activeClass='active' spy={true} offset={-110} to={link}>{text[`${link}`]}</Link>
                                    ))
                                }
                            </div>
                            <div className="icons d-xl-none">
                                <LanguageLinks />
                                <div className="sosial-icons">
                                    <div className='link'><i className="fa-brands fa-facebook-f"></i></div>
                                    <div className='link'><i className="fa-brands fa-instagram"></i></div>
                                    <div className='link'><i className="fa-brands fa-youtube"></i></div>
                                </div>
                            </div>
                            <div className="contact-links d-xl-none">
                                <div className='link'><i className="fa-solid fa-envelope"></i><span>info@dayaq.az</span></div>
                                <div className='link'><i className="fa-solid fa-phone-volume"></i><span>+994 50 440-32-55</span></div>
                            </div>
                        </div>
                        <button className="menu-button d-xl-none" onClick={toggleMenu}>
                            {
                                menu ? (
                                    <i className="fa-solid fa-xmark"></i>
                                ) : (
                                    <i className="fa-solid fa-bars-staggered"></i>
                                )
                            }
                        </button>
                        <div className="right d-none d-xl-flex">
                            <LanguageLinks />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
