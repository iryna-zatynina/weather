import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Header = ({}) => {
    const {t, i18n} = useTranslation();
    return (
        <header className='Header'>
            <div className="container">
                <nav className='Header__nav'>
                    <div className='Header__nav_block'>
                        <div className='Header__logo'><Link className='link' to={'/'}><span className='blue-letter'>W</span><span className='yellow-letter'>T</span></Link></div>
                        <ul>
                            <li><Link className='link' to={'/'} variant="primary">{t("Home")}</Link></li>
                            <li><Link className='link' to={'/forecast'}>{t("Forecast")}</Link></li>
                        </ul>
                    </div>
                    <a className='Header__lang' variant="primary" onClick={() => {i18n.language === "en" ? i18n.changeLanguage("ua") : i18n.changeLanguage("en")}}>{t("EN")}</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;