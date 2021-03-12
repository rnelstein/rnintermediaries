import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../card.css'

import React, {useEffect, useState} from 'react';
import SideMenu from "./SideMenu";
import Header from "./Header";
import {Fade} from "react-reveal";
import OwlCarousel from "react-owl-carousel";
import {useTranslation} from "react-i18next";
import Contact from "./Contact";

const Home = () => {
    const {t, i18n} = useTranslation();
    const [lang, setLang] = useState('')

    useEffect(() => {
        setLang(i18n.language)

    }, [i18n.language]);

    return (
        <React.Fragment>
            <SideMenu/>
            <Header/>
            <div className="sidebar-wrapper">

                <section className="padding-twenty-top vh-100" data-scroll-index="0">
                    <div className="container">
                        <div className="text-center xs-padding-50px-top">
                            <h1 className="text-white font-size48 md-font-size44 sm-font-size36 xs-font-size28 font-weight-600 margin-40px-bottom sm-margin-30px-bottom xs-margin-20px-bottom">
                                {t('index0.title')}

                            </h1>
                            <p className="text-white font-size22 md-font-size20 sm-font-size18 xs-font-size16 font-weight-300 width-75 xs-width-90 center-col margin-40px-bottom sm-margin-30px-bottom xs-margin-25px-bottom">
                                {t('index0.subtitle')}
                            </p>
                            <button data-scroll-nav="1" className="btn1"> {t('index0.buttonText')}</button>
                        </div>
                    </div>
                </section>

                <section className="mb-3" data-scroll-index="1">
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                                    <h3 className="font-weight-700 font-size32 md-font-size30 sm-font-size28 xs-font-size26 section-title">
                                        {t('index1.title')}
                                    </h3>

                                    {t('index1.text').split('\n').map((line,index) => (
                                        <p key={index} className="text-white line-height-28 font-size18 xs-font-size16 font-weight-300">
                                            {line}
                                        </p>)
                                    )}
                                </div>
                            </div>


                            <div className="row justify-content-around">
                                <div className="col-md-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle"
                                             src={process.env.PUBLIC_URL + "/img/raffa.jpg"} alt=""/>
                                        <h6 className="card-title text-white font-weight-bold">
                                            Rafaël Venetiaan
                                        </h6>
                                        <a className="btn btn-dark btn-social mx-2"
                                           href="mailto:rafael@rnintermediaries.com"><i
                                            className="fas fa-envelope"/></a>
                                        <a className="btn btn-dark btn-social mx-2"
                                           href="https://www.linkedin.com/in/rafa%C3%ABl-venetiaan-304224178/"><i
                                            className="fab fa-linkedin-in"/></a>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="team-member">
                                        <img className="mx-auto rounded-circle"
                                             src={process.env.PUBLIC_URL + "/img/nuel.jpg"} alt=""/>
                                        <h6 className="card-title text-white font-weight-bold">Nüel Weinchard
                                        </h6>

                                        <a className="btn btn-dark btn-social mx-2"
                                           href="mailto:nuel@rnintermediaries.com"><i
                                            className="fas fa-envelope"/></a>
                                        <a className="btn btn-dark btn-social mx-2"
                                           href="https://www.linkedin.com/in/n%C3%BCel-weinchard-1047827b/"><i
                                            className="fab fa-linkedin-in"/></a>

                                        <a className="btn btn-dark btn-social mx-2"
                                           href="https://www.instagram.com/nuelweinchard/"><i
                                            className="fab fa-instagram"/></a>
                                    </div>
                                </div>


                            </div>


                        </div>
                    </Fade>

                </section>

                <section className="mb-3" data-scroll-index="2">
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                                    <h3 className="font-weight-700 font-size32 md-font-size30 sm-font-size28 xs-font-size26 section-title">
                                        {t('index2.title')}
                                    </h3>
                                </div>
                            </div>


                            <div className="row">

                                <div
                                    className="col-lg-4 col-md-6  text-center margin-40px-bottom sm-margin-30px-bottom">
                                    <div className="grid-block">
                                        <div
                                            className="display-inline-block position-relative margin-30px-bottom xs-margin-20px-bottom">
                                            <div className="service-icons"><i className="fab fa-hotjar"/></div>
                                        </div>
                                        <h5 className="margin-10px-bottom font-weight-500 font-size22 md-font-size18 text-white">
                                            {t('index2.gridBlock1.title')}
                                        </h5>
                                        <p className="text-white font-size15 md-font-size14 width-90 sm-width-100 center-col no-margin-bottom font-weight-300">
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-4 col-md-6  text-center margin-40px-bottom sm-margin-30px-bottom">
                                    <div className="grid-block">
                                        <div
                                            className="display-inline-block position-relative margin-30px-bottom xs-margin-20px-bottom">
                                            <div className="service-icons"><i className="fab fa-accusoft"/></div>
                                        </div>
                                        <h5 className="margin-10px-bottom font-weight-500 font-size22 md-font-size18 text-white">
                                            {t('index2.gridBlock2.title')}
                                        </h5>
                                        <p className="text-white font-size15 md-font-size14 width-90 sm-width-100 center-col no-margin-bottom font-weight-300">
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="col-lg-4 col-md-12  text-center margin-40px-bottom sm-margin-30px-bottom">
                                    <div className="grid-block">
                                        <div
                                            className="display-inline-block position-relative margin-30px-bottom xs-margin-20px-bottom">
                                            <div className="service-icons"><i className="fas fa-seedling"/></div>
                                        </div>
                                        <h5 className="margin-10px-bottom font-weight-500 font-size22 md-font-size18 text-white">
                                            {t('index2.gridBlock3.title')}
                                        </h5>
                                        <p className="text-white font-size15 md-font-size14 width-90 sm-width-100 center-col no-margin-bottom font-weight-300">
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Fade>
                </section>

                <section className="mb-3" data-scroll-index="3">
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                                    <h3 className="font-weight-700 font-size32 md-font-size30 sm-font-size28 xs-font-size26 section-title">
                                        {t('index3.title')}
                                    </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <OwlCarousel
                                        className="testimonial owl-carousel owl-theme"
                                        items={1}>

                                        <div className="item text-center">
                                            <div className="">
                                                <i className="fas fa-quote-left font-size50 xs-font-size46 text-white"/>
                                                <p className="text-white margin-20px-top xs-margin-15px-top margin-30px-bottom xs-margin-25px-bottom font-size18 line-height-30 width-75 sm-width-80 xs-width-100 center-col">
                                                    {t('index3.item1.text')}
                                                </p>
                                                <h6 className="text-white font-weight-400 font-size20 no-margin-bottom">-
                                                    {t('index3.item1.name')}
                                                </h6>
                                            </div>
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>

                        </div>
                    </Fade>
                </section>

                <section className="contact-form" data-scroll-index="4">
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div
                                    className="col-12 center-col margin-70px-bottom sm-margin-40px-bottom xs-margin-30px-bottom text-center">
                                    <h3 className="font-weight-700 font-size32 md-font-size30 sm-font-size28 xs-font-size26 section-title">Contact</h3>
                                </div>
                            </div>
                            <div className="row margin-50px-bottom">
                                <div className="col-md-12 xs-margin-30px-bottom">
                                    <div>
                                        <h6 className="text-uppercase font-weight-600 font-size16 md-font-size15 xs-margin-15px-bottom">Visit
                                            Our Social Media At</h6>
                                        <ul className="profile-list">

                                            <li>
                                                <a href="mailto:info@rnintermediaries.com"
                                                   className="text-white no-margin-bottom font-weight-500 font-size15 md-font-size20 xs-font-size18 width-70 md-width-75 xs-width-auto">
                                                    info@rnintermediaries.com
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.instagram.com/rnintermediaries"
                                                   className="text-white no-margin-bottom font-weight-500 font-size15 md-font-size20 xs-font-size18 width-70 md-width-75 xs-width-auto">
                                                    <i className="fab fa-instagram mr-3"/>
                                                    @rnintermediaries
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://twitter.com/RNIntermediary"
                                                   className="text-white no-margin-bottom font-weight-500 font-size15 md-font-size20 xs-font-size18 width-70 md-width-75 xs-width-auto">
                                                    <i className="fab fa-twitter mr-3"/>
                                                    @RNIntermediary
                                                </a>
                                            </li>
                                        </ul>
                                        <h6 className="text-uppercase font-weight-600 font-size16 md-font-size15 xs-margin-15px-bottom">Visit
                                            Or Message Us</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Contact/>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>

                <div id="back-to-top" className="back-to-top reveal" data-scroll-nav="0">
                    <i className="fa fa-angle-up"/>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Home;