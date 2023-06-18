import React from 'react'
import { useDispatch } from 'react-redux';
import flag_az from '../image/flags/flag-az.png'
import flag_en from '../image/flags/flag-en.png'
import flag_ru from '../image/flags/flag-ru.png'
import { setLanguage } from '../redux/actions/LanguageAction';

function LanguageLinks() {
    const dispatch = useDispatch();
    const handleLanguageChange = (language) => {
        dispatch(setLanguage(language));
        if(language === 'en'){
            document.title = 'Dental Support Project'
        }else if(language === 'ru'){
            document.title = 'Проект стоматологической поддержки'
        }else{
            document.title = 'Stomatoloji Dayaq Layihəsi'
        }
      };
    return (
        <div className="lang-flags">
            <button onClick={() => handleLanguageChange('az')}><img src={flag_az} alt="flag-az" /></button>
            <button onClick={() => handleLanguageChange('en')}><img src={flag_en} alt="flag-en" /></button>
            <button onClick={() => handleLanguageChange('ru')}><img src={flag_ru} alt="flag-ru" /></button>
        </div>
    )
}

export default LanguageLinks
