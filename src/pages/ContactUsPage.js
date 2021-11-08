import React from 'react'
import ContactUsForm from '../forms/ContactUsForm'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
const ContactUsPage = (props) => {
    return (
        <div className='contact-us-page'>
            <Header fullMenu={true}/>
            <div className='row contact-us'>
                <div className='col-lg-6 col-md-6 col-md-12 col-sm-12'>
                    <h1>Get in touch!</h1>
                    <p>We are here to help you anytime!</p>
                    <ul>
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <p>5FC6+83 Doha, Qatar</p>
                        </li>
                        <li>
                            <span><i className="fas fa-phone-alt"></i></span>
                            <p>+971 3130 7072</p>
                        </li>
                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <p>info@outlineworldacademy.com</p>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-6 col-md-6 col-md-12 col-sm-12'>
                    <ContactUsForm />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ContactUsPage
