import React from 'react'
import { useHistory } from 'react-router-dom'
import classes from './CardInformationForm.module.css'

const CardInformation = () => {
    const history = useHistory();
        
    const goBackHandler = () => {
        history.goBack();
    }
    return (
        <>
            <form className={`col-lg-7 col-md-12 col-sm-12 ${classes.CardInformationForm}`}>
                <h1>Card Information</h1>
                <button onClick={goBackHandler} className='goBackButton'>Back</button>
                <label>Cardholder's Name:</label>
                <input id='cardHolder' name='cardHolder' type='text' />
                <label>Card Number</label>
                <input id='cardNumber' type="number" name='cardNumber'  placeholder="0000 0000 0000 0000" minLength="16" maxLength="16"/>
               <div > 
               <span>
                    <label>Expiry Date</label>
                    <input id='expiry' name='expiry' type='text' />
                </span>
                <span>
                    <label>Card Code (CVC)</label>
                    <input id='cvc' name='cvc' type='password' placeholder="&#9679;&#9679;&#9679;" minLength="3" maxLength="3"/>
                </span>
               </div>
            </form>
        </>
    )
}

export default CardInformation
