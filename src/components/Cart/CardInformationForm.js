import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CardInformationForm.module.css'

const CardInformation = () => {
    return (
        <>
            <form className={`col-lg-7 col-md-12 col-sm-12 ${classes.CardInformationForm}`}>

                <h1>Card Information</h1>
                <Link to=''>Back</Link>
                <label>Card Number</label>
                <input id='cardNumber' name='cardNumber' type='text' />
               <div > 
               <span>
                    <label>Expiry Date</label>
                    <input id='expiry' name='expiry' type='text' />
                </span>
                <span>
                    <label>Card Code (CVC)</label>
                    <input id='cvc' name='cvc' type='text' />
                </span>
               </div>

            </form>
        </>
    )
}

export default CardInformation
