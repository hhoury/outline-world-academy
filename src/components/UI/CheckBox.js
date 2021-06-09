import React from 'react'
import classes from './Checkbox.module.css'
const CheckBox = (props) => {
    return (
        <label className={`${classes['checkbox-label']} ${props.className}`}>
            <input type='checkbox' id='rememberMe' />
            <span className={classes['checkbox-custom']}></span>
            <span>Remember Me</span>
        </label>
    )
}

export default CheckBox