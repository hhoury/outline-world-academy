import React from 'react'
import classes from './Header.module.css'
import image from '../assets/logo.png'
const Header = () => {
    return (
        <header className={classes.header}>
            <a href='/'>
                <img src={image} alt='outline world academy' />
            </a>
            <div className={`${classes.menu} ml-auto`}>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>about</a></li>
                    <li><a href='/'>courses</a></li>
                    <li><a href='/'>contact us</a></li>
                </ul>
                <div className={classes['right-menu']}>
                    <ul>
                        <li><a href='/'><i className="fal fa-user"></i></a></li>
                        <li><a href='/'><i className="fal fa-shopping-bag"></i></a></li>
                        <li><a href='/'><i className="fal fa-search"></i></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
