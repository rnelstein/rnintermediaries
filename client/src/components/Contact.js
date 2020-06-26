import React from 'react';
import {reset, Field, reduxForm} from "redux-form";
import axios from "axios"



const Contact = (props) => {
    const {handleSubmit, pristine, submitting} = props

    const onSubmit = async (formValues, dispatch) => {
        console.log(formValues)
        await axios.post('http://localhost:5000/api/mail', formValues);

        dispatch(reset("contact"));
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
        </form>
    );
};

export default reduxForm({
    form: 'contact',
})(Contact)