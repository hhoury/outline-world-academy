import React from 'react'
import image from '../assets/logo.png'
import classes from './Logo.module.css'
import { NavLink } from 'react-router-dom'
const Logo = () => {
    return (
        <NavLink to='/home' className={classes.logo}>
            <img src={image} alt='outline world academy' />
        </NavLink>
    )
}

export default Logo
