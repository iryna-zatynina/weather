import React, {useState} from 'react';
import './SearchCity.scss'
import {useTranslation} from "react-i18next";

const SearchCity = ({city, setCity, handleCity, getForecast, message, validation}) => {
    const {t} = useTranslation();
    const onSearchClick = (e) => {
        e.preventDefault();
        if (validation) {
            getForecast();
        }
    }
    return (
        <div className='container'>
            <form className='SearchCity'>
                <input
                    className='SearchCity__input'
                    type="text"
                    placeholder={t("Enter your city")}
                    value={city}
                    onChange={handleCity}/>
                <button className='SearchCity__btn' onClick={onSearchClick}>{t("Search")}</button>
            </form>
            <p className="validation-message">{t(message)}</p>
        </div>
    );
};

export default SearchCity;