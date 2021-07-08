import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PersonalDetailsForm.module.css'
import useInput from '../../hooks/use-input'

const isNotEmpty = (value) => {
    return value.trim() !== ''
}

const isEmail = email => {
    if (email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return (true)
    }
    else {
        return false
    }
}

const PersonalDetails = () => {
    const {
        value: enteredFName,
        hasError: fnameInputHasError,
        isValid: enteredFNameIsValid,
        valueChangeHandler: fnameChangedHandler,
        inputBlurHandler: fnameBlurHandler,
        reset: resetFNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredLName,
        hasError: lnameInputHasError,
        isValid: enteredLNameIsValid,
        valueChangeHandler: lnameChangedHandler,
        inputBlurHandler: lnameBlurHandler,
        reset: resetLNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(isEmail);
    const {
        value: enteredCountry,
        hasError: countryInputHasError,
        isValid: enteredCountryIsValid,
        valueChangeHandler: countryChangedHandler,
        inputBlurHandler: countryBlurHandler,
        reset: resetCountryInput
    } = useInput(isNotEmpty);
    const {
        value: enteredTown,
        hasError: townInputHasError,
        isValid: enteredTownIsValid,
        valueChangeHandler: townChangedHandler,
        inputBlurHandler: townBlurHandler,
        reset: resetTownInput
    } = useInput(isNotEmpty);
    const {
        value: enteredStreet,
        hasError: streetInputHasError,
        isValid: enteredStreetIsValid,
        valueChangeHandler: streetChangedHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetInput
    } = useInput(isNotEmpty);
    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        isValid: enteredPhoneIsValid,
        valueChangeHandler: phoneChangedHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhoneInput
    } = useInput(isNotEmpty);

    const fNameClasses = fnameInputHasError ? 'invalid' : '';
    const lNameClasses = lnameInputHasError ? 'invalid' : '';
    const emailClasses = emailInputHasError ? 'invalid' : '';
    const countryClasses = countryInputHasError ? 'invalid' : '';
    const townClasses = townInputHasError ? 'invalid' : '';
    const streetClasses = streetInputHasError ? 'invalid' : '';
    const phoneClasses = phoneInputHasError ? 'invalid' : '';

    
    let formIsValid = false;
    if (enteredEmailIsValid && enteredFNameIsValid && enteredLNameIsValid && enteredCountryIsValid && enteredTownIsValid && enteredStreetIsValid && enteredPhoneIsValid) {
        formIsValid = true;
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        resetEmailInput();
        resetFNameInput();
        resetLNameInput();
        resetCountryInput();
        resetTownInput();
        resetStreetInput();
        resetPhoneInput();
        
    }
    return (
        <>
            <form onSubmit={formSubmitHandler} className={`col-lg-7 col-md-12 col-sm-12 ${classes.PersonalDetailsForm}`}>
                <h1>Personal Details</h1>
                <Link to='/order-details'>Back</Link>

                <div className={classes.name}>
                    <span>
                        <label htmlFor='fname'>First name</label>
                        <input id='fname' name='fname' type='text' required className={fNameClasses}
                         value={enteredFName}
                         onChange={fnameChangedHandler}
                         onBlur={fnameBlurHandler} />
                    </span>
                    <span>
                        <label htmlFor='lname'>Last Name</label>
                        <input id='lname' name='lname' type='text' required className={lNameClasses} 
                         value={enteredLName}
                         onChange={lnameChangedHandler}
                         onBlur={lnameBlurHandler} />
                    </span>
                </div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' required className={emailClasses}
                 value={enteredEmail}
                 onChange={emailChangedHandler}
                 onBlur={emailBlurHandler} />

                <label htmlFor='country'>Country / Region</label>
                <input type='text' id='country' name='country' required className={countryClasses}
                 value={enteredCountry}
                    onChange={countryChangedHandler}
                    onBlur={countryBlurHandler} />

                <label htmlFor='town'>Town / City</label>
                <input type='text' id='town' name='town' required className={townClasses}
                 value={enteredTown}
                    onChange={townChangedHandler}
                    onBlur={townBlurHandler} />

                <label htmlFor='street'>Street adress</label>
                <input type='text' id='street' name='street' required className={streetClasses}
                 value={enteredStreet}
                    onChange={streetChangedHandler}
                    onBlur={streetBlurHandler} />

                <label htmlFor='phone'>Phone</label>
                <input type='tel' id='phone' name='phone' required className={phoneClasses}
                 value={enteredPhone}
                    onChange={phoneChangedHandler}
                    onBlur={phoneBlurHandler} />
            </form>

        </>

    )
}

export default PersonalDetails
