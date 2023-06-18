import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
    let date = new Date();
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    return (
        <footer className="bottom">
            <div className="container">
                <div className="text">
                    <p>{text['dental_support_project']} &copy; <span className="year">{date.getFullYear()}</span>. {text['all_rights_reserved']}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
