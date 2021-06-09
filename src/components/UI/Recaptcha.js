import classes from './Recaptcha.module.css'
import React from 'react'

const Recaptcha = (props) => {
    return (
        <div className={`${classes.recaptcha} ${props.className}`}>
        <form action="?" method="POST" >
            <div className="g-recaptcha" data-sitekey="6LeW1CAbAAAAAMAYRXoorBYep0BGYjcRgKoxJ4tn"></div>
            <br />
            <input type="submit" value="Submit" style={{display:'none'}}/>
        </form>
        </div>
    )
}

export default Recaptcha
