import React from 'react';
import Header from "../../Components/Header/Header";
import DiscoverForecast from "../../Components/DiscoverForecast/DiscoverForecast";
import './Landing.scss'
import {useTranslation} from "react-i18next";

const Landing = () => {

    // const changeLanguageFunc = () => {
    //     const {t, i18n} = useTranslation()
    //     console.log("changed")
    //     i18n.language === "en" ? i18n.changeLanguage("ua") : i18n.changeLanguage("en")
    // }

    return (
        <>
            <Header  />
            <DiscoverForecast />

        </>
    );
};

export default Landing;