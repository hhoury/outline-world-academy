import React, { forwardRef, useImperativeHandle, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { savePaymentInfo } from '../../actions/cartActions';
import { placeOrder } from '../../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CardInformationForm.module.css'
import useInput from '../../hooks/use-input'
import $ from 'jquery';
import { Helmet } from 'react-helmet';
import ScriptTag from 'react-script-tag';

const isNotEmpty = (value) => {
    return value?.trim() !== ''
}

const CardInformation = forwardRef((props, ref) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const goBackHandler = () => {
        history.goBack();
    }
    const cardInfoSubmitHandler = (e) => {
        console.log('cardInfoSubmitHandler');
    }
    const {
        value: enteredCardHolder,
        hasError: cardHolderInputHasError,
        valueChangeHandler: cardHolderChangedHandler,
        inputBlurHandler: cardHolderBlurHandler,
        setValue: setCardHolderValue
    } = useInput(isNotEmpty);
    const {
        value: enteredCardNumber,
        hasError: cardNumberInputHasError,
        valueChangeHandler: cardNumberChangedHandler,
        inputBlurHandler: cardNumberBlurHandler,
        setValue: setCardNumberValue
    } = useInput(isNotEmpty);
    const {
        value: enteredExpiryMonth,
        hasError: ExpiryMonthInputHasError,
        valueChangeHandler: expiryMonthChangedHandler,
        inputBlurHandler: expiryMonthBlurHandler,
        setValue: setExpiryMonthValue
    } = useInput(isNotEmpty);

    const {
        value: enteredExpiryYear,
        hasError: ExpiryYearInputHasError,
        valueChangeHandler: expiryYearChangedHandler,
        inputBlurHandler: expiryYearBlurHandler,
        setValue: setExpiryYearValue
    } = useInput(isNotEmpty);

    const {
        value: enteredCVC,
        hasError: cVCInputHasError,
        valueChangeHandler: cVCChangedHandler,
        inputBlurHandler: cVCBlurHandler,
        setValue: setCVCValue
    } = useInput(isNotEmpty);

    const cart = useSelector((state) => state.cart)
    const { paymentInfo } = cart;
    useEffect(() => {
        if (paymentInfo) {
            setCardHolderValue(paymentInfo.cardholder)
            setExpiryMonthValue(paymentInfo.expiryMonth)
            setExpiryYearValue(paymentInfo.expiryYear)
            setCVCValue(paymentInfo.cvc)
            setCardNumberValue(paymentInfo.cardNumber)
        }
    }, [paymentInfo])

    const res = useSelector((state) => state.order);
    const { order } = res;
    const orderId = order.id
    const ApiOperation = "PAY"
    const ApiMethod = "POST"
    const CardNumber = enteredCardNumber
    const ExpiryMonth = enteredExpiryMonth
    const ExpiryYear = enteredExpiryYear
    const SecurityCode = enteredCVC
    let formIsValid = false;
    if (enteredCardHolder && enteredCardNumber && enteredCVC && enteredExpiryMonth && enteredExpiryYear) {
        formIsValid = true;
    }
    useImperativeHandle(ref, () => ({

        cardInfoSubmitHandler(event) {
            console.log('cardInfoSubmitHandler inside cardinfo form');
            event.preventDefault();
            if (!formIsValid) {
                return;
            }
            dispatch(savePaymentInfo({
                cardholder: enteredCardHolder,
                cvc: enteredCVC,
                expiryMonth: enteredExpiryMonth,
                expiryYear: enteredExpiryYear,
                cardNumber: enteredCardNumber,
            }))
           
            dispatch(placeOrder(orderId, orderId, ApiOperation, ApiMethod, CardNumber, ExpiryMonth, ExpiryYear, SecurityCode
            ))
        }
    })
    )
    return (
        <>
            {/* <Helmet>
                 <script src="../../scripts/HostedSession.js" type="text/javascript" />
                 
            </Helmet>
            <ScriptTag isHydrating={true} type="text/javascript" src="../../scripts/HostedSession.js" /> */}

            <form id='card' name='card' onSubmit={cardInfoSubmitHandler} className={`col-lg-7 col-md-12 col-sm-12 ${classes.CardInformationForm}`}>
                <h1>Card Information</h1>
                <button onClick={goBackHandler} className='goBackButton'>Back</button>
                <label>Cardholder's Name:</label>
                <input id='cardHolder'
                    style={cardHolderInputHasError ? { border: '1px solid red' } : {}}
                    name='cardHolder' type='text' required
                    value={enteredCardHolder}
                    onChange={cardHolderChangedHandler}
                    onBlur={cardHolderBlurHandler} />
                <label>Card Number</label>
                <input id='card-number' required type="number" name='card-number'
                    style={cardNumberInputHasError ? { border: '1px solid red' } : {}} placeholder="0000 0000 0000 0000" minLength="16" maxLength="16"
                    value={enteredCardNumber}
                    onChange={cardNumberChangedHandler}
                    onBlur={cardNumberBlurHandler}
                />
                <div >
                    <span>
                        <label>Expiry Month</label>
                        <input id='expiry-month'
                            style={ExpiryMonthInputHasError ? { border: '1px solid red' } : {}}
                            name='expiry-month' type='text' required placeholder='mm'
                            value={enteredExpiryMonth}
                            onChange={expiryMonthChangedHandler}
                            onBlur={expiryMonthBlurHandler}
                        />
                    </span>
                    <span>
                        <label>Expiry year</label>
                        <input id='expiry-year'
                            style={ExpiryYearInputHasError ? { border: '1px solid red' } : {}}
                            name='expiry-year' type='text' required
                            value={enteredExpiryYear} placeholder='yy'
                            onChange={expiryYearChangedHandler}
                            onBlur={expiryYearBlurHandler}
                        />
                    </span>
                    <span>
                        <label>Card Code (CVC)</label>
                        <input id='security-code' style={cVCInputHasError ? { border: '1px solid red' } : {}}
                            name='security-code' type='password' placeholder="&#9679;&#9679;&#9679;" required minLength="3" maxLength="3"
                            value={enteredCVC}
                            onChange={cVCChangedHandler}
                            onBlur={cVCBlurHandler} />
                    </span>
                </div>
            </form>
        </>
    )
})

export default CardInformation
