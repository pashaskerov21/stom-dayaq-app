import React from 'react'
import { useSelector } from 'react-redux'
import { reportArr } from '../data/ReportData'
import CounterItem from './CounterItem'

function ReportSection() {
    const language = useSelector(state => state.language.language)
    const text = require(`../lang/${language}.json`)
    return (
        <section className="counter-section" id='report' >
            <div className="container">
                <h2 className="section-title">{text['report']}</h2>
                <span className="calculation-value">{text['report_subtext']}</span>
                <div className='row'>
                    {
                        reportArr.map(item => (
                            <div className='col-12 col-sm-6 col-lg-3' key={item.id}>
                                <CounterItem text={text} item={item}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ReportSection
