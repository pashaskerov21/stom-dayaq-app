import React from 'react'
import { useSelector } from 'react-redux'

function AboutSection() {
  const language = useSelector(state => state.language.language)
  const text = require(`../lang/${language}.json`)
  return (
    <section className="about-section" id='about' data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">{text['about_title']}</h2>
          </div>
          <div className="col-12 col-md-6" data-aos="zoom-in-down">
            <div className="content">
              <span className="text-title">{text['about']}</span>
              <div className="text">
                <p>
                  {text['about_text_1']}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6" data-aos="zoom-in-down">
            <div className="content">
              <span className="text-title">{text['our_goal']}</span>
              <div className="text">
                <p>
                  {text['about_text_2']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
