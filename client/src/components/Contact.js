import React from 'react';
import {reset, Field, reduxForm} from "redux-form";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";




const Contact = (props) => {
    const {handleSubmit, pristine, submitting} = props
    const {t, i18n} = useTranslation();




    const onSubmit = async (formValues, dispatch) => {
        try {
            await axios.post('http://localhost:5000/api/mail', formValues);

            toast.success(t('index4.emailSuccess'), {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            dispatch(reset("contact"));
        }catch (e) {
            console.log("message send error")
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="form-type" value="contact"/>
            <div className="row">
                <div className="col-md-6">
                    <Field component="input" type="text" name="name" placeholder="Your Name:" required/>
                </div>


                <div className="col-md-6">
                    <Field component="input" type="email" name="email" placeholder="Email:" required/>
                </div>
                <div className="col-md-12">
                    <Field component="textarea" name="message" rows="5" placeholder="Message:" required/>
                </div>
                <div className="col-md-12">
                    <button type="submit" disabled={pristine || submitting} className="btn1">Send Message</button>
                </div>
            </div>
            <ToastContainer
            />
        </form>
    );
};

export default reduxForm({
    form: 'contact',
})(Contact)