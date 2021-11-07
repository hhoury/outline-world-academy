import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import image1 from '../assets/about1.jpg'
import image2 from '../assets/about2.jpg'
import image3 from '../assets/about3.jpg'
import image4 from '../assets/about4.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutPage = () => {
    return (
        <div className='about-us' >
            <Header fullMenu={true} />
            <h1>Our experience was gained from work in architectural design studios, interior design studios, and furniture companies. Working with different types of clients and environments around the world added a multi-cultural style to our work.
            </h1>
            <div className='why-us'>
                <div className='row1'>
                    <figure className='figure-1'><img src={image1} alt='why outline world academy' /></figure>
                    <h1>WHY OUTLINE WORLD ACADEMY?</h1>
                </div>
                <div className='row2'>
                    <figure className='figure-2'><img src={image2} alt='why outline world academy' /></figure>
                    <div>
                        <p>First specialized academy in the region.</p>
                        <p>First academy certfied by Chaos Czech a.s. and Corona renderer in the Region.</p>
                        <p>First Academy to provide Yearly Support and assistance.</p>

                    </div>
                </div>


            </div>

            <figure>
                <LazyLoadImage src={image3} alt='outline world academy process' />
            </figure>
            <div className='the-process row'>
                <div className='the-process__text col-lg-6 col-md-6 col-sm-12'>
                    <h1>THE PROCESS</h1>
                    <p>
                        The process is divided into 3 phases: Modeling, Texturing, Lighting. With us you will learn everything from scratch. You will learn how to master each phase, tips, and tricks and how to create realistic renders from scratch. Our courses focus on real production workflow. The courses are made from pre-recorded videos to cover all the basics and live webinars with a Corona certified instructor to cover different topics and all your questions</p>
                </div>
                <div className='the-process__images col-lg-5 col-md-5 col-sm-12'>
                    <figure className='about-4'>
                        <LazyLoadImage src={image4} alt='outline world academy' />
                    </figure>
                    <figure className='about-4'>
                        <LazyLoadImage src={image4} alt='outline world academy' />
                    </figure>
                    <figure className='about-4'>
                        <LazyLoadImage src={image4} alt='outline world academy' />
                    </figure>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage
