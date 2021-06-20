import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Carousel } from 'react-bootstrap'
import banner1 from '../assets/banner1.jpg'

const BlogPage = () => {
    return (
        <div>
            <Header fullMenu={true}/>
            <Carousel touch controls={false}>
                <Carousel.Item>
                    <img style={{ height: '100%' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Footer />
        </div>
    )
}

export default BlogPage
