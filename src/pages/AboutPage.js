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
            <Header  fullMenu={true}/>
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat
            </h1>
            <div className='why-us'>
                <div className='row1'>
                    <figure className='figure-1'><img src={image1} alt='why outline world academy' /></figure>
                    <h1>WHY OUTLINE WORLD ACADEMY?</h1>
                </div>
                <div className='row2'>
                    <figure className='figure-2'><img src={image2} alt='why outline world academy' /></figure>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>


            </div>

            <figure>
                <LazyLoadImage src={image3} alt='outline world academy process' />
            </figure>
            <div className='the-process row'>
                <div className='the-process__text col-lg-6 col-md-6 col-sm-12'>
                    <h1>THE PROCESS</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
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
