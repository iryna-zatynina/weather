import React from 'react';
import './DiscoverForecast.scss';
import bg1 from '../../resource/img/bg1.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const DiscoverForecast = () => {
    const {t} = useTranslation();

    return (
        <main className='LandingMain'>
            <div className='container'>
                <div>
                    <h1>{t("Forecast_weather")}<span> {t("Weather_forecast")}</span></h1>
                    <Link className='link' to={'/forecast'}><button className='LandingMain__btn'>{t("Discover")}</button></Link>
                </div>
                <div className="img"><img src={bg1} alt="boy with umbrella"/></div>
            </div>
        </main>
    );
};

export default DiscoverForecast;