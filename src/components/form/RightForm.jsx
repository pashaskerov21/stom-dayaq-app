import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

function RightForm({ cityArr }) {
    const language = useSelector(state => state.language.language)
    const text = require(`../../lang/${language}.json`)

    const [fullName, setFullName] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [adressValue, setAddressValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [fileInputValue_1, setFileInputValue_1] = useState('');
    const [fileInputValue_2, setFileInputValue_2] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(fullName === '' ||  selectValue === '' || adressValue === '' || fileInputValue_1 === '' || fileInputValue_2 === ''){
            toast.error('* la işarələnmiş xanaları doldurun')
        }else{
            toast.success('Məlumatlar yadda saxlanıldı')
            const user_data = {
                fullName,
                selectValue,
                adressValue,
                phoneValue,
                fileInputValue_1,
                fileInputValue_2
            }
            console.log(user_data)
        }
    }


    return (
        <form onSubmit={handleFormSubmit} className="general-form right">
            <span className="form-title">{text['left_form_title']}</span>
            <div className="form-wrapper">
                <div className="f_component">
                    <div className="input-group">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" placeholder={`${text['firstname_lastname_fathername']} *`} />
                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <select defaultValue='disabled-value' onChange={(e) => setSelectValue(e.target.value)} className="form-select">
                        <option value='disabled-value' disabled>{text['city_select_title_2']} *</option>
                        {
                            cityArr.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="f_component">
                    <div className="input-group">
                        <input type="text" value={adressValue} onChange={(e) => setAddressValue(e.target.value)} className="form-control" placeholder={`${text['adress_placeholder_2']} *`} />
                        <span className="input-group-text"><i className="fa-solid fa-house"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <div className="input-group">
                        <input type="text" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} className="form-control" placeholder="055XXXXXXX" />
                        <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
                    </div>
                </div>
                <div className="f_component">
                    <span className="f_label">{text['foto_card_label_front']} *</span>
                    <div className="file-input">
                        <input type="file" value={fileInputValue_1} onChange={(e) => setFileInputValue_1(e.target.value)} />
                        <span>
                            {
                                fileInputValue_1 === '' ? (
                                    text['download_document']
                                ) : (
                                    fileInputValue_1
                                )
                            }
                        </span>
                        <button type="button">{text['download']}</button>
                    </div>
                </div>
                <div className="f_component">
                    <span className="f_label">{text['foto_card_label_back']} *</span>
                    <div className="file-input">
                        <input type="file" value={fileInputValue_2} onChange={(e) => setFileInputValue_2(e.target.value)} />
                        <span>
                            {
                                fileInputValue_2 === '' ? (
                                    text['download_document']
                                ) : (
                                    fileInputValue_2
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

export default RightForm
