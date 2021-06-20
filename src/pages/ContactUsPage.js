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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                    <ul>
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                        </li>
                        <li>
                            <span><i className="fas fa-phone-alt"></i></span>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                        </li>
                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <p>www.outlineworldacademy.com</p>
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
