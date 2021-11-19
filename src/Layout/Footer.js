import React from 'react'
import classes from './Footer.module.css'
import logo from '../assets/logo.png'
import Button from '../components/UI/Button'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={classes.gradient}>
            </div>
            <footer className='row'>
                <div className={`${classes.column1} col-lg-3 col-md-5 col-sm-12`}>
                    <div>
                        <img src={logo} alt='outline world academy' />
                    </div>
                    <p>Capturing Realism in a Virtual World

                    </p>
                    <div className={classes.social}>
                        <ul>
                            <li><a href='/'><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href='/'><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className={`${classes.column2} col-lg-3 col-md-5 col-sm-12`}>
                    <ul>
                        <li><Link to='/our-world'>our world</Link></li>
                        <li><Link to='/courses'>courses</Link></li>
                        <li><Link to='/about-us'>about</Link></li>
                        <li><Link to='/blog'>blog</Link></li>
                    </ul>
                </div>

                <div className={`${classes.column3} col-lg-3 col-md-5 col-sm-12`}>
                    <h2>contact us</h2>
                    <ul>
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <p>5FC6+83 Doha, Qatar
                            </p>
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

                <div className={`${classes.column4} col-lg-3 col-md-5 col-sm-12`}>
                    <h2>SUBSCRIBE</h2>
                    <p>Enter your email to subscribe in our Newsletter</p>
                    <input type='email' required placeholder='Email' />
                    <Button className={classes.btn}>SUBSCRIBE</Button>
                </div>
            </footer>
        </>
    )
}

export default Footer
