import React from 'react'
import classes from './FAQS.module.css'
import Button from '../UI/Button'
const FAQS = () => {
    return (
        <div className={classes.Faqs}>
            <h2>FAQS</h2>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.
                </p>
                <Button className={classes.download}>DOWNLOAD PDF</Button>
            </div>
        </div>
    )
}

export default FAQS
