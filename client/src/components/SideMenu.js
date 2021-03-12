import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const SideMenu = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = lng => i18n.changeLanguage(lng);
    return (
        <div className="side-menu side-menu-active left-panel">
            <div className="inner-wrapper">

                <Link to="/" data-scroll-nav="0" className="profile-pic margin-15px-bottom">
                    <img src={process.env.PUBLIC_URL + "/img/logo-light.png"} alt="logo-light.png"/>
                </Link>

                <div className="separator-line-horrizontal-full bg-extra-light-gray margin-15px-bottom"/>

                <nav className="side-nav width-100">
                    <ul className="navbar-nav ml-auto text-uppercase">
                        <li className="nav-item">
                            <Link className="nav-link" to="#" data-scroll-nav="1">
                                {t('nav.el0')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" data-scroll-nav="2">
                                {t('nav.el1')}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#" data-scroll-nav="3">
                                {t('nav.el2')}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#" data-scroll-nav="4">
                                {t('nav.el3')}
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="separator-line-horrizontal-full bg-extra-light-gray margin-15px-bottom"/>

                <div className="side-footer width-100">
                    <ul className="profile-list">
                        <li>
                            <a href="mailto:info@rnintermediaries.com"
                               className="text-white">info@rnintermediaries.com</a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/rnintermediaries" className="text-white">
                                <i className="fab fa-instagram mr-3"/>
                                @rnintermediaries
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/RNIntermediary" className="text-white">
                                <i className="fab fa-twitter mr-3"/>
                                @RNIntermediary
                            </a>
                        </li>

                        <li className="mt-5">
                            <div className="row">
                                <div className="col">
                                    <span style={{cursor: "pointer"}} className="flag-icon flag-icon-us"
                                          onClick={() => changeLanguage('us')}/>
                                </div>
                                <div className="col">
                                    <span style={{cursor: "pointer"}} className="flag-icon flag-icon-es"
                                          onClick={() => changeLanguage('es')}/>
                                </div>
                                <div className="col">
                                    <span style={{cursor: "pointer"}} className="flag-icon flag-icon-nl"
                                          onClick={() => changeLanguage('nl')}/>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default SideMenu;