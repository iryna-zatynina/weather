import React from 'react';
import './ForecastInfo.scss'
import cloud from '../../resource/img/cloud.jpeg'
import {useTranslation} from "react-i18next";


const ForecastInfo = () => {
    const {t} = useTranslation()
    return (
        <div className='ForecastInfo'>
            <div className='container'>
                <div className='wraper'>
                    <div className='ForecastInfo__block'>
                        <h3>{t("Weather forecast in")} <span>{t("Ivano-Frankivsk, Ukraine")}</span></h3>
                        <p>{t("Today is")} {t("Wednesday")}, 19 {t("October")}, 19:39</p>
                        <div>
                            <img src={cloud} alt="cloud"/>
                            <span className='temperature'>+11°</span>
                            <span className='condition'>{t("cloudy")}</span>
                            <div>
                                <p><span>776{t("mmHg")}</span> {t("heightened")}</p>
                                <p><span>78%</span> {t("very high humidity")}</p>
                                <p><span>3{t("m/s")}</span> {t("light wind")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastInfo;