import React from 'react'
import classes from './Form.module.css'

const Form = (props) => {
    return (
        <div className={`${classes.form} ${props.className}`}>
        {props.children}
    </div>
    )
}

export default Form
