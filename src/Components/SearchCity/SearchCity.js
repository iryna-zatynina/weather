import React, {useState} from 'react';
import './SearchCity.scss'
import {useTranslation} from "react-i18next";

const SearchCity = ({city, handleCity, getForecast, message}) => {
    const {t} = useTranslation();

    return (
        <div className='container'>
            <form className='SearchCity'>
                <input
                    className='SearchCity__input'
                    type="text"
                    placeholder={t("Enter your city")}
                    value={city}
                    onChange={handleCity}/>
                <button className='SearchCity__btn' onClick={getForecast}>{t("Search")}</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default SearchCity;