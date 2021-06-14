import React from 'react'
import classes from './Header.module.css'
import image from '../assets/logo.png'
import RightMenu from './RightMenu'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to='/home'>
                <img src={image} alt='outline world academy' />
            </NavLink>
            <nav className={`${classes.menu} ml-auto`}>
                <ul>
                    <li><NavLink activeClassName={classes.active} exact to='/home'>Home</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/about'>about</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/courses'>courses</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/contact-us'>contact us</NavLink></li>
                </ul>
                
                <RightMenu />
            </nav>
        </header>
    )
}

export default Header
