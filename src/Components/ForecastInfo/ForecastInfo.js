import React, {useEffect, useState} from 'react';
import './ForecastInfo.scss'
import cloud from '../../resource/img/cloud.jpeg'
import {useTranslation} from "react-i18next";
import axios from "axios";
import data from "bootstrap/js/src/dom/data";


const ForecastInfo = ({forecastInfo}) => {

    const {t} = useTranslation()

    const date = new Date();
    const time = date.getHours().toString() + ':' + date.getMinutes().toString();
    const monthIndex = date.getMonth();
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = date.getDate()
    const dayOfWeekIndex = date.getDay();
    const dayOfWeekIndexArr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return (
        <div className='ForecastInfo'>
            <div className='container'>
                <div className='wraper'>
                    <div className='ForecastInfo__block'>
                        <h3>{t("Weather forecast in")} <span>{t(forecastInfo.name)}, {t("Ukraine")}</span></h3>
                        <p>{t("Today is")} {t(dayOfWeekIndexArr[dayOfWeekIndex])}, {day} {t(monthArr[monthIndex])}, {time}</p>
                        <div>
                            <span className='temperature'>+{forecastInfo.temp}°</span>
                            <span className='condition'>{t("Feels like")}: +{forecastInfo.feel}°</span>
                            <div>
                                <p>{t("Pressure")} <span>{forecastInfo.pressure} {t("mmHg")}</span></p>
                                <p>{t("Humidity")} <span>{forecastInfo.humidity}%</span></p>
                                <p>{t("Wind")} <span>{forecastInfo.wind} {t("m/s")}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastInfo;