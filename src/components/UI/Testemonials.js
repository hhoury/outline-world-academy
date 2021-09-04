import React from 'react'
import { Carousel } from 'react-bootstrap'
import carousel1 from '../../assets/carousel1.jpg'
import carousel2 from '../../assets/carousel2.jpg'
import carousel3 from '../../assets/carousel3.jpg'
import classes from './Testemonials.module.css'
const Testemonials = () => {
    return (
        <div className={classes.Testemonials}>
            <h1>Testomonials</h1>
            <Carousel controls={false} keyboard={false} interval={null} >
                <Carousel.Item className={classes['carousel-item']}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className={classes['carousel-caption']}>
                        <div className={classes.testomonial}>
                            <div className={classes['testomonial-body']}>
                                <span><i className="fas fa-quote-left"></i></span>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

                                </p>
                                <span><i className="fas fa-quote-right"></i></span>
                            </div>
                            <div className={classes['testomonial-footer']}>
                                <h4>Mariam Kozbar</h4>
                                <p>Digital Designer.</p>
                            </div>
                        </div>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testemonials
