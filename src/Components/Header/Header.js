import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {
    const {t, i18n} = useTranslation();
    return (
        <header className='Header'>
            <Navbar expand="sm">
                <div className="container">
                    <Navbar.Brand className="logo"><Link className='link' to={'/'}><span className='blue-letter'>W</span><span className='yellow-letter'>T</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="Header__nav">
                        <div className="Header__nav_block">
                            <Nav className="Header__nav_item"><Link className='link' to={'/'} variant="primary">{t("Home")}</Link></Nav>
                            <Nav className="Header__nav_item"><Link className='link' to={'/forecast'}>{t("Forecast")}</Link></Nav>
                        </div>
                        <Nav className="Header__nav_item"><a className='Header__lang' onClick={() => {i18n.language === "en" ? i18n.changeLanguage("ua") : i18n.changeLanguage("en")}}>{t("EN")}</a></Nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>
        </header>);
};

export default Header;