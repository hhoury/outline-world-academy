import React from 'react'
import classes from './Header.module.css'
import image from '../assets/logo.png'
import RightMenu from './RightMenu'
import { NavLink } from 'react-router-dom'
import ResponsiveMenu from './ResponsiveMenu'


const Header = (props) => {

    
    const name = JSON.parse(localStorage.getItem('userInfo'))?.name
    return (
        <>
        <header className={`${classes.Header} ${props.className}`}>
            <NavLink to='/home'>
                <img src={image} alt='outline world academy' />
            </NavLink>
            <nav className={`${classes.menu} ml-auto `}>
                {
                props.fullMenu && <ul className={classes['full-menu']}>
                    <li><NavLink activeClassName={classes.active} exact to='/home'>Home</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/about-us'>about</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/courses'>courses</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/blog'>blog</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/contact-us'>contact us</NavLink></li>
                </ul>
                }
                {props.withName && <p className={classes.hello}>Hello, {name}</p>}
                <RightMenu />
               {props.fullMenu &&  <ResponsiveMenu />}
            </nav>
        </header>
        </>
    )
}

export default Header
