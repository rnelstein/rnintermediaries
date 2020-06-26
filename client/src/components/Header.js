import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState('')

    useEffect(() => {
        setLang(i18n.language)

    }, [i18n.language]);

    const toggle = () => setIsOpen(!isOpen);
    const changeLanguage = lng => i18n.changeLanguage(lng);

    return (
        <nav className="navbar navbar-expand-lg border-none bg-light-gray desktop-hide">
            <div className="container">

                <Link className="navbar-brand" to="#" data-scroll-nav="0">
                    <img src={process.env.PUBLIC_URL +"/img/logo-dark.png"} alt="logo-dark" width="75"
                         title="logo-dark"/>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={toggle}
                        data-target="#navbarContent"
                        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-bar"><i className="fas fa-bars"/></span>
                </button>

                <div className={`collapse navbar-collapse desktop-hide ${isOpen && "show"} `} id="navbarContent">
                    <ul className="navbar-nav ml-auto ">


                        <li className="nav-item" onClick={toggle}>
                            <Link to="#" className="nav-link" data-scroll-nav="1">{t('nav.el0')}</Link>
                        </li>

                        <li className="nav-item" onClick={toggle}>
                            <Link to="#" className="nav-link" data-scroll-nav="2">{t('nav.el1')}</Link>
                        </li>
                        <li className="nav-item" onClick={toggle}>
                            <Link to="#" className="nav-link" data-scroll-nav="3">{t('nav.el2')}</Link>
                        </li>
                        <li className="nav-item" onClick={toggle}>
                            <Link to="#" className="nav-link" data-scroll-nav="6">{t('nav.el3')}</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className={`flag-icon flag-icon-${lang}`}/>
                            </Link>


                            <div className="dropdown-menu" aria-labelledby="dropdown09">

                                <Link to="#" className="dropdown-item" onClick={() => {
                                    changeLanguage('us');
                                    toggle();
                                }}>
                                    <span className="flag-icon flag-icon-us"/>English
                                </Link>

                                <Link to="#" className="dropdown-item" onClick={() => {
                                    changeLanguage('es');
                                    toggle();
                                }}>
                                    <span className="flag-icon flag-icon-es"/>Español
                                </Link>

                                <Link to="#" className="dropdown-item" onClick={() => {
                                    changeLanguage('nl');
                                    toggle();
                                }}>
                                    <span className="flag-icon flag-icon-nl"/>Nederlands
                                </Link>

                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <button className="sidemenu_btn sm-display-none" id="sidebar_toggle">
                <span/> <span/> <span/>
            </button>
        </nav>
    );
};

export default Header;