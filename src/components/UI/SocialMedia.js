import classes from './SocialMedia.module.css'
import React from 'react'

const SocialMedia = (props) => {
    return (
        <div className={`${classes['social-media']} ${props.className}`}>
            <h1>Connect with</h1>
            <div className={classes['icons-group']}>
                <span><a href='/'><i className="fab fa-google"></i></a></span>
                <span><a href='/'><i className="fab fa-facebook-f"></i></a></span>
            </div>
        </div>
    )
}

export default SocialMedia
