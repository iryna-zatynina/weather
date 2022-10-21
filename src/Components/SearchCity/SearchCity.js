import React from 'react';
import './SearchCity.scss'
import {useTranslation} from "react-i18next";

const SearchCity = () => {
    const {t} = useTranslation()
    return (
        <div className='container'>
            <form className='SearchCity'>
                <input className='SearchCity__input' type="text" placeholder={t("Enter your city")}/>
                <button className='SearchCity__btn'>{t("Search")}</button>
            </form>
        </div>
    );
};

export default SearchCity;