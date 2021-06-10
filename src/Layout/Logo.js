import React from 'react'
import image from '../assets/logo.png'
import classes from './Logo.module.css'
const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={image} alt='OW' />
        </div>
    )
}

export default Logo
