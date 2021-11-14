import React, { forwardRef, useImperativeHandle, useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
// import { savePaymentInfo } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import classes from './CardInformationForm.module.css'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API } from '../../constants/appConstants'
import {clearCartItems} from '../../actions/cartActions'
const MASTER_CARD_SESSION_JS_SRC = `https://test-bobsal.gateway.mastercard.com/form/version/45/merchant/OUTWORLD/session.js`;
const MPGS_TIMEOUT = 5000;


const CardInformation = forwardRef((props, ref) => {

    const notify = (toastMessage) => {
        toast.error(toastMessage,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: false,
            })
    }
    const notifySuccess = () => {
        toast.success('Payment Successful',
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: false,
            });
    }




    const { register, watch, setValue, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(true);
    const onScriptLoad = ({
        initialized,
        formSessionUpdate,
    }) => {
        const { PaymentSession } = window;

        if (!PaymentSession) {
            return;
        }

        PaymentSession.configure({
            fields: {
                card: {
                    number: "#card-number",
                    securityCode: "#security-code",
                    expiryMonth: "#expiry-month",
                    expiryYear: "#expiry-year",
                    nameOnCard: "#cardholder-name",
                },
            },
            frameEmbeddingMitigation: ["javascript"],
            callbacks: {
                initialized: (response) => {
                    console.log('Session initialized', response);
                    initialized(response);
                },
                formSessionUpdate: (response) => {
                    console.log('Form session update', response);
                    formSessionUpdate(response);
                },
            },
        });
    };

    const pay = () => {
        const { PaymentSession } = window;

        if (!PaymentSession) {
            return;
        }
        PaymentSession.updateSessionFromForm('card');
    }

    const loadScript = async (formSessionUpdate) => {
        if (!document) {
            return Promise.reject();
        }

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, MPGS_TIMEOUT);

            const prevScript = document.querySelector(`script[src="${MASTER_CARD_SESSION_JS_SRC}"]`);

            if (prevScript) {
                prevScript.remove();
            }

            const script = document.createElement('script');
            script.src = MASTER_CARD_SESSION_JS_SRC;
            script.async = 1;
            script.onerror = reject;
            script.onload = () => onScriptLoad({
                initialized: resolve,
                formSessionUpdate,
            });

            document.body.appendChild(script);
        });
    }
    const history = useHistory();
    const dispatch = useDispatch();
    const [sessionId, setSessionId] = useState('')

    const goBackHandler = () => {
        history.goBack();
    }
    const cardInfoSubmitHandler = (e) => {
        e.preventDefault();
        console.log('card info payment');

    }

    const res = useSelector((state) => state.order);
    const { order } = res;
    const orderId = order?.id

    useImperativeHandle(ref, () => ({
        cardInfoSubmitHandler(event) {
            event.preventDefault();
            pay();
        }
    })
    )
    var DotNetSample = {
        operation: function () {
            return "PAY";
        },
        endpoint: function () {
            return `${API}PaymentApi/processHostedSession`;
        },
        secureIdResponseUrl: function () {
            return null;
        }
    };
    const handleFormSessionUpdate = useCallback((response) => {
        // HANDLE RESPONSE FOR UPDATE SESSION
        if (response.status) {
            if ("ok" === response.status) {
                setError(false);
                console.log("Session updated with data: " + response.session.id);
                //   onFormSessionUpdated(response.session.id);
                setSessionId(response.session.id)
                //check if the security code was provided by the user
                if (response.sourceOfFunds.provided.card.securityCode) {
                    console.log("Security code was provided.");
                }

                //check if the user entered a Mastercard credit card
                if (response.sourceOfFunds.provided.card.scheme === 'MASTERCARD') {
                    console.log("The user entered a Mastercard credit card.")
                }
                var data = {
                    apiOperation: DotNetSample.operation(),
                    sessionId: response.session.id,
                    secureIdResponseUrl: DotNetSample.secureIdResponseUrl(),
                    orderId: orderId ? localStorage.getItem('orderId') : orderId,
                    studentId: JSON.parse(localStorage.getItem('userInfo'))?.id
                };

                var xhr = new XMLHttpRequest();
                xhr.open('POST', DotNetSample.endpoint(), true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
                xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://109.235.69.20');
                xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === XMLHttpRequest.DONE) {
                        var res = JSON.parse(this.response)
                        console.log(res);
                        console.log(res.data)
                        if (res.paid) {
                            dispatch(clearCartItems())
                            notifySuccess()
                            history.push('/my-courses')
                        }
                    }
                };
                xhr.send(JSON.stringify(data));

            } else if ("fields_in_error" === response.status) {
                setError(error => true);
                console.log("Session update failed with field errors.");
                if (response.errors.cardNumber) {
                    notify('Card number invalid or missing');
                }
                if (response.errors.expiryYear) {
                    notify('Expiry year invalid or missing');
                }
                if (response.errors.expiryMonth) {
                    notify('Expiry month invalid or missing');

                }
                if (response.errors.securityCode) {
                    notify('Security code invalid');
                }
            } else if ("request_timeout" === response.status) {
                console.log("Session update failed with request timeout: " + response.errors.message);
            } else if ("system_error" === response.status) {
                console.log("Session update failed with system error: " + response.errors.message);
            }
        } else {
            console.log("Session update failed: " + response);
        }
    }, [])
    //onFormSessionUpdated
    useEffect(() => {
        loadScript(handleFormSessionUpdate)
            .catch(() => console.error('CANT NOT LOAD MPGS'));
    }, [handleFormSessionUpdate]);


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
            />
            <form id='card' name='card' onSubmit={handleSubmit(cardInfoSubmitHandler)} className={`col-lg-7 col-md-12 col-sm-12 ${classes.CardInformationForm}`}>
                <h1>Card Information</h1>
                <button onClick={goBackHandler} className='goBackButton'>Back</button>
                <label>Cardholder's Name:</label>
                <input id='cardholder-name'
                    name='cardholder-name'
                    {...register("cardholder-name", { required: true, maxLength: 80 })}
                    type='text'
                    required

                />
                <label>Card Number</label>
                <input id='card-number' required type="number"
                    placeholder="0000 0000 0000 0000"
                    readOnly
                    pattern="/^\d+$/"
                //  {...register("card-number", {required: true, maxLength: 16, minLength: 16})} 
                />
                <div >
                    <span>
                        <label>Expiry Month</label>
                        <input id='expiry-month'
                            name='expiry-month'
                            type="text" pattern="\d*" maxLength={2}
                            required
                            placeholder='mm'
                            {...register("expiry-month", { required: true })}
                        />
                    </span>
                    <span>
                        <label>Expiry year</label>
                        <input id='expiry-year'
                            name='expiry-year'
                            type="text" pattern="\d*" maxLength={2}
                            required
                            placeholder='yy'
                            {...register("expiry-year", { required: true })}
                        />
                    </span>
                    <span>
                        <label>Card Code (CVC)</label>
                        <input id='security-code'
                            readOnly
                            type="text" pattern="\d*"
                            required
                        />
                    </span>
                </div>
            </form>
        </>
    )
})

export default CardInformation
