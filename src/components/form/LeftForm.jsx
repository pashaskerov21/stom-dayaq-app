import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function LeftForm({medicalAreaArr, cityArr}) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`)

    const [fullName, setFullName] = useState('');
    const [checkboxValue, setChekcboxValue] = useState([]);
    const [selectValue, setSelectValue] = useState('');
    const [adressValue, setAddressValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [fileInputValue, setFileInputValue] = useState('');


    const handleCheckboxChange = (e) => {
        const checkboxValue = e.target.value;
        if (e.target.checked) {
            setChekcboxValue((prevCheckboxValues) => [
                ...prevCheckboxValues,
                checkboxValue
            ])
        } else {
            setChekcboxValue((prevCheckboxValues) =>
            prevCheckboxValues.filter((name) => name !== checkboxValue)
            );
        }
    }


    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(fullName === '' || checkboxValue.length === 0 || selectValue === '' || adressValue === '' ||  emailValue === '' || fileInputValue === ''){
            toast.error('* la işarələnmiş xanaları doldurun')
        }else{
            toast.success('Məlumatlar yadda saxlanıldı')
            const user_data = {
                fullName,
                checkboxValue,
                selectValue,
                adressValue,
                phoneValue,
                emailValue,
                fileInputValue,
            }
            console.log(user_data)
        }
    }


    return (
        <form onSubmit={handleFormSubmit}  className="general-form left">
            <span className="form-title">{text['left_form_title']}</span>
            <div className="form-wrapper">
                <div className="f_component">
                    <div className="input-group">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" placeholder={`${text['firstname_lastname_fathername']} *`} />
                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <span className="f_label">{text['medical_area_title']} *</span>
                    <div className="chekbox-wrapper">
                        {
                            medicalAreaArr.map((area, index) => (
                                <div className="form-check" key={index}>
                                    <input value={text[`${area}`]} onChange={handleCheckboxChange} type="checkbox" className="form-check-input" id={`check_${index}`} />
                                    <label className="form-check-label" htmlFor={`check_${index}`}>{text[`${area}`]}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="f_component">
                    <select defaultValue='disabled-value' onChange={(e) => setSelectValue(e.target.value)} className="form-select">
                        <option value='disabled-value' disabled>{text['city_select_title_1']} *</option>
                        {
                            cityArr.map((city,index) => (
                                <option key={index} value={city}>{city}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="f_component">
                    <div className="input-group">
                        <input type="text" value={adressValue} onChange={(e) => setAddressValue(e.target.value)} className="form-control" placeholder={`${text['adress_placeholder_1']} *`} />
                        <span className="input-group-text"><i className="fa-solid fa-house"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <div className="input-group">
                        <input type="number" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} className="form-control" placeholder="055XXXXXXX" />
                        <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <div className="input-group">
                        <input type="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} className="form-control" placeholder="E-mail *" />
                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <span className="f_label">{text['foto_label_1']} *</span>
                    <div className="file-input">
                        <input type="file" value={fileInputValue} onChange={(e) => setFileInputValue(e.target.value)} />
                        <span>
                            {
                                fileInputValue === '' ? (
                                    text['download_image']
                                ) : (
                                    fileInputValue
                                )
                            }
                        </span>
                        <button type="button">{text['download']}</button>
                    </div>
                </div>
                <button type="submit" className="submit-button">{text['send']}</button>
            </div>
        </form>
    )
}

export default LeftForm
