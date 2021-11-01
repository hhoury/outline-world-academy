import React, { forwardRef, useImperativeHandle, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/use-input'
import { useDispatch, useSelector } from 'react-redux'
import {saveShippingAddress} from '../../actions/cartActions'
import classes from './PersonalDetailsForm.module.css'
import {updateBillingAddress} from '../../actions/orderActions'
const isNotEmpty = (value) => {
    return value?.trim() !== ''
}

const isEmail = email => {
    if (email?.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        return (true)
    }
    else {
        return false
    }
}

const PersonalDetails = forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        value: enteredFName,
        hasError: fnameInputHasError,
        isValid: enteredFNameIsValid,
        valueChangeHandler: fnameChangedHandler,
        inputBlurHandler: fnameBlurHandler,
        setValue: setFNameValue
    } = useInput(isNotEmpty);

    const {
        value: enteredLName,
        hasError: lnameInputHasError,
        isValid: enteredLNameIsValid,
        valueChangeHandler: lnameChangedHandler,
        inputBlurHandler: lnameBlurHandler,
        setValue: setLNameValue
    } = useInput(isNotEmpty);

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        isValid: enteredEmailIsValid,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        setValue: setEmailValue
    } = useInput(isEmail);
    const {
        value: enteredCountry,
        hasError: countryInputHasError,
        isValid: enteredCountryIsValid,
        valueChangeHandler: countryChangedHandler,
        inputBlurHandler: countryBlurHandler,
        setValue: setCountryValue
    } = useInput(isNotEmpty);
    const {
        value: enteredTown,
        hasError: townInputHasError,
        isValid: enteredTownIsValid,
        valueChangeHandler: townChangedHandler,
        inputBlurHandler: townBlurHandler,
        setValue: setTownValue
    } = useInput(isNotEmpty);
    const {
        value: enteredStreet,
        hasError: streetInputHasError,
        isValid: enteredStreetIsValid,
        valueChangeHandler: streetChangedHandler,
        inputBlurHandler: streetBlurHandler,
        setValue: setStreetValue
    } = useInput(isNotEmpty);
    const {
        value: enteredPhone,
        hasError: phoneInputHasError,
        isValid: enteredPhoneIsValid,
        valueChangeHandler: phoneChangedHandler,
        inputBlurHandler: phoneBlurHandler,
        setValue: setPhoneValue
    } = useInput(isNotEmpty);
    
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    const res = useSelector((state) => state.order);
    const {order} = res; 
    
    useEffect(() => {
        if(shippingAddress)
        {
            setFNameValue(shippingAddress.fname)
            setLNameValue(shippingAddress.lname)
            setEmailValue(shippingAddress.email)
            setCountryValue(shippingAddress.country)
            setTownValue(shippingAddress.town)
            setStreetValue(shippingAddress.street)
            setPhoneValue(shippingAddress.phone)
        }
    }, [shippingAddress])


    let formIsValid = false;
    if (enteredEmailIsValid && enteredFNameIsValid && enteredLNameIsValid && enteredCountryIsValid && enteredTownIsValid && enteredStreetIsValid && enteredPhoneIsValid) {
        formIsValid = true;
    }
    useImperativeHandle(ref, () => ({
        formSubmitHandler(event) {
            console.log('form submit handler');
            event.preventDefault();
            if (!formIsValid) {
                return;
            }
            dispatch(saveShippingAddress({
                fname: enteredFName,
                lname: enteredLName,
                email: enteredEmail,
                country: enteredCountry,
                town: enteredTown,
                street: enteredStreet,
                phone: enteredPhone
            }))
            dispatch(updateBillingAddress(order.id,enteredFName,enteredLName,enteredEmail,enteredCountry,enteredTown,enteredStreet,enteredPhone))
            history.push('/order-review')
        }
    })
    )
    return (
        <>
            <form onSubmit={props.proceedHandler} className={`col-lg-7 col-md-12 col-sm-12 ${classes.PersonalDetailsForm}`}>
                
                <h1>Billing Details</h1>
                <Link to='/order-details'>Back</Link>

                <div className={classes.name}>
                    <span>
                        <label htmlFor='fname'>First name</label>
                        <input
                            id='fname'
                            name='fname'
                            type='text'
                            required
                            style={ fnameInputHasError ? {border: '1px solid red'}:{}}
                            value={enteredFName}
                            onChange={fnameChangedHandler}
                            onBlur={fnameBlurHandler} />
                    </span>
                    <span>
                        <label htmlFor='lname'>Last Name</label>
                        <input
                            id='lname'
                            name='lname'
                            type='text'
                            required
                            value={enteredLName}
                            onChange={lnameChangedHandler}
                            onBlur={lnameBlurHandler} 
                             style={ lnameInputHasError ? {border: '1px solid red'}:{}}/>
                    </span>
                </div>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    value={enteredEmail}
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler} 
                     style={ emailInputHasError ? {border: '1px solid red'}:{}}/>

                <label htmlFor='country'>Country / Region</label>
                <input
                    type='text'
                    id='country'
                    name='country'
                    required
                    value={enteredCountry}
                    onChange={countryChangedHandler}
                    onBlur={countryBlurHandler} 
                     style={ countryInputHasError ? {border: '1px solid red'}:{}}/>

                <label htmlFor='town'>Town / City</label>
                <input 
                type='text' 
                id='town' 
                name='town' 
                required
                    value={enteredTown}
                    onChange={townChangedHandler}
                    onBlur={townBlurHandler} 
                     style={ townInputHasError ? {border: '1px solid red'}:{}}/>

                <label htmlFor='street'>Street adress</label>
                <input
                    type='text'
                    id='street'
                    name='street'
                    required
                    value={enteredStreet}
                    onChange={streetChangedHandler}
                    onBlur={streetBlurHandler} 
                     style={ streetInputHasError ? {border: '1px solid red'}:{}}/>

                <label htmlFor='phone'>Phone</label>
                <input
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    value={enteredPhone}
                    onChange={phoneChangedHandler}
                    onBlur={phoneBlurHandler} 
                    style={ phoneInputHasError ? {border: '1px solid red'}:{}}/>
            </form>
        </>

    )
})

export default PersonalDetails
