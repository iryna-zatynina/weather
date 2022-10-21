import React from 'react';
import './LandingMain.scss';
import bg1 from '../../resource/img/bg1.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const LandingMain = () => {
    const {t} = useTranslation();

    return (
        <main className='LandingMain'>
            <img src={bg1} alt="boy with umbrella"/>
            <div className='container'>
                <h1>{t("Forecast_weather")}<span> {t("Weather_forecast")}</span></h1>
                <Link className='link' to={'/forecast'}><button className='LandingMain__btn'>{t("Discover")}</button></Link>
            </div>
        </main>
    );
};

export default LandingMain;