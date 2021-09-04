import React from 'react'
import classes from './OurClients.module.css'
import image from '../../assets/our-clients.png'
const OurClients = () => {
    return (
        <div className={classes.OurClients}>
            <h2>Our Clients</h2>
            <img src={image} alt='Our Clients' />
        </div>
    )
}

export default OurClients
