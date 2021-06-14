import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
const PolicyPage = () => {
    return (
        <>
        <Header />
        <article className='privacy-policy'>
            <h1>Privacy Policy</h1>
            <h2>Who we are</h2>
            <p>Our website address is:<a rel='noreferrer' href='http://www.stateofartacademy.com' target='_blank' > https://www.stateofartacademy.com.</a></p>
            <h2>What personal data we collect and why we collect it</h2>
            <h3>Comments</h3>
            <p>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user
                agent string to help spam detection.</p>
            <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The
            Gravatar service privacy policy is available here: <a href='https://automattic.com/privacy' rel='noreferrer' target='_blank'>https://automattic.com/privacy/</a>. After approval           of your comment, your profile picture is visible
            to the public in the context of your comment.</p>
            <h3>Media</h3>
            <p>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF            GPS) included. Visitors to the website
            can download and extract any location data from images on the website.</p>
            <h3>Contact forms</h3>
            <p>All data gathered through our contact forms will be saved on our CRM and we’ll use the email to contact you both to answer your questions and
            to send information on new courses and activity updates. Such data will be saved forever unless you notify us that you want to withdraw your
            registration.</p>
        </article>
        <Footer/>
        </>
    )
}

export default PolicyPage
