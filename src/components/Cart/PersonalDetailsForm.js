import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PersonalDetailsForm.module.css'

const PersonalDetails = () => {
    return (
        <>
            <form className={`col-lg-7 col-md-7 col-sm-12 ${classes.PersonalDetailsForm}`}>
                <h1>Personal Details</h1>
                <Link to='/order-details'>Back</Link>

                <div className={classes.name}>
                    <span>
                        <label htmlFor='fname'>First name</label>
                        <input id='fname' name='fname' type='text' />
                    </span>
                    <span>
                        <label htmlFor='lname'>Last Name</label>
                        <input id='lname' name='lname' type='text' />
                    </span>
                </div>
                <label htmlFor='fname'>Email</label>
                <input type='text' id='email' name='email' />
                <label htmlFor='country'>Country / Region</label>
                <input type='text' id='country' name='country' />
                <label htmlFor='town'>Town / City</label>
                <input type='text' id='town' name='town' />
                <label htmlFor='street'>Street adress</label>
                <input type='text' id='street' name='street' />
                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' name='phone' />
            </form>

        </>

    )
}

export default PersonalDetails
