import React,{forwardRef, useImperativeHandle, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { savePaymentInfo } from '../../actions/cartActions';
import { useDispatch , useSelector } from 'react-redux';
import classes from './CardInformationForm.module.css'
import useInput from '../../hooks/use-input'

const isNotEmpty = (value) => {
    return value?.trim() !== ''
  }

const CardInformation = forwardRef((props,ref) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const goBackHandler = () => {
        history.goBack();
    }
    const cardInfoSubmitHandler = () => {
        history.push('order-review')
    }
    const {
        value: enteredCardHolder,
        hasError: cardHolderInputHasError,
        isValid: enteredCardHolderIsValid,
        valueChangeHandler: cardHolderChangedHandler,
        inputBlurHandler: cardHolderBlurHandler,
        reset: resetCardHolderInput,
        setValue: setCardHolderValue
    } = useInput(isNotEmpty);
    const {
        value: enteredCardNumber,
        hasError: cardNumberInputHasError,
        isValid: enteredCardNumberIsValid,
        valueChangeHandler: cardNumberChangedHandler,
        inputBlurHandler: cardNumberBlurHandler,
        reset: resetCardNumberInput,
        setValue: setCardNumberValue
    } = useInput(isNotEmpty);
    const {
        value: enteredExpiryDate,
        hasError: ExpiryDateInputHasError,
        isValid: enteredExpiryDateIsValid,
        valueChangeHandler: expiryDateChangedHandler,
        inputBlurHandler: expiryDateBlurHandler,
        reset: resetExpiryDateInput,
        setValue: setExpiryDateValue
    } = useInput(isNotEmpty);
    const {
        value: enteredCVC,
        hasError: cVCInputHasError,
        isValid: enteredCVCIsValid,
        valueChangeHandler: cVCChangedHandler,
        inputBlurHandler: cVCBlurHandler,
        reset: resetCVCInput,
        setValue: setCVCValue
    } = useInput(isNotEmpty);

    const cart = useSelector((state) => state.cart)
    const { paymentInfo } = cart;
    useEffect(() => {
        if(paymentInfo)
        {
            setCardHolderValue(paymentInfo.cardholder)
            setExpiryDateValue(paymentInfo.expiryDate)
            setCVCValue(paymentInfo.cvc)
            setCardNumberValue(paymentInfo.cardNumber)
    }}, [paymentInfo])



    let formIsValid = false;
  if (enteredCardHolder && enteredCardNumber && enteredCVC && enteredExpiryDate) {
    formIsValid = true;
  }
    useImperativeHandle(ref, () => ({
        
        cardInfoSubmitHandler(event) {
            event.preventDefault();
            if (!formIsValid) {
                return;
            }
            dispatch(savePaymentInfo({
                cardholder: enteredCardHolder,
                cvc: enteredCVC,
                expiryDate: enteredExpiryDate,
                cardNumber: enteredCardNumber,
            }))
            history.push('/order-review')
        }
    })
    )
    return (
        <>
            <form onSubmit={cardInfoSubmitHandler} className={`col-lg-7 col-md-12 col-sm-12 ${classes.CardInformationForm}`}>
                <h1>Card Information</h1>
                <button onClick={goBackHandler} className='goBackButton'>Back</button>
                <label>Cardholder's Name:</label>
                <input id='cardHolder'
                      style={ cardHolderInputHasError ? {border: '1px solid red'}:{}}
                       name='cardHolder' type='text' required
                       value={enteredCardHolder}
                       onChange={cardHolderChangedHandler}
                       onBlur={cardHolderBlurHandler} />
                <label>Card Number</label>
                <input id='cardNumber' required type="number" name='cardNumber' 
                  style={ cardNumberInputHasError ? {border: '1px solid red'}:{}}  placeholder="0000 0000 0000 0000" minLength="16" maxLength="16"
                        value={enteredCardNumber}
                       onChange={cardNumberChangedHandler}
                       onBlur={cardNumberBlurHandler}
                       />
               <div > 
               <span>
                    <label>Expiry Date</label>
                    <input id='expiry' 
                      style={ ExpiryDateInputHasError ? {border: '1px solid red'}:{}}
                      name='expiry' type='text' required
                      value={enteredExpiryDate}
                      onChange={expiryDateChangedHandler}
                      onBlur={expiryDateBlurHandler}
                       />
                </span>
                <span>
                    <label>Card Code (CVC)</label>
                    <input id='cvc'   style={ cVCInputHasError ? {border: '1px solid red'}:{}}
                    name='cvc' type='password' placeholder="&#9679;&#9679;&#9679;"  required minLength="3" maxLength="3"
                    value={enteredCVC}
                    onChange={cVCChangedHandler}
                    onBlur={cVCBlurHandler}/>
                </span>
               </div>
            </form>
        </>
    )
})

export default CardInformation
