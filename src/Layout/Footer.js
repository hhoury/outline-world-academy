import React from 'react'
import classes from './Footer.module.css'
import logo from '../assets/logo.png'
import Button from '../components/UI/Button'
const Footer = () => {
    return (
        <>
            <div className={classes.gradient}>

            </div>
            <footer className={`row ${classes.footer}`}>
                <div className={`${classes.column1} col-lg-3 col-md-3 col-sm-12`}>
                    <div>
                        <img src={logo} alt='outline world academy' />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit Lorem ipsum dolor sit amet</p>
                    <div className={classes.social}>
                        <ul>
                            <li><a href='/'><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href='/'><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${classes.column2} col-lg-3 col-md-3 col-sm-12`}>
                    <ul>
                        <li><a href='/'>our world</a></li>
                        <li><a href='/'>courses</a></li>
                        <li><a href='/'>about</a></li>
                        <li><a href='/'>blog</a></li>
                    </ul>
                </div>
                <div className={`${classes.column3} col-lg-3 col-md-3 col-sm-12`}>
                    <h2>contact us</h2>
                    <ul>
                        <li>
                            <span><i className="fas fa-map-marker-alt"></i></span>
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <span><i className="fas fa-phone-alt"></i></span>
                            <p>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li>
                            <span><i className="fas fa-envelope"></i></span>
                            <p>www.outlineworldacademy.com</p>
                        </li>
                    </ul>
                </div>
                <div className={`${classes.column4} col-lg-3 col-md-3 col-sm-12`}>
                    <h2>SUBSCRIBE</h2>
                    <p>Enter your email to subscribe in our Newsletter</p>
                    <input type='text' placeholder='Email' />
                    <Button className={classes.btn}>SUBSCRIBE</Button>
                </div>
            </footer>
        </>
    )
}

export default Footer
