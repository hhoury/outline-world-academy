import React, { useState, useEffect } from 'react'
import classes from './CouponCode.module.css'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { applyCoupon } from '../../actions/orderActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CouponCode = () => {
    const notifySuccess = () => toast.success(`Coupon ${watch('Coupon')}  Applied!`,
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
        });
    const notifyFailed = () => toast.error("Coupon Not Applicable!",
        {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
        });
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
    const res = useSelector((state) => state.order);
    const { order } = res;
    const dispatch = useDispatch()
    const applyCouponHandler = (data) => {
        const orderId = localStorage.getItem('orderId')
        dispatch(applyCoupon(orderId, watch('Coupon')))
    }
    const [couponApplied, setCouponApplied] = useState(false)

    const couponData = useSelector((state) => state.coupon)
    const { coupon } = couponData

    useEffect(() => {
        if (coupon.discount) {
            setValue('Coupon', coupon.code)
            notifySuccess()
            setCouponApplied(true)
        }
        if (coupon.error) {
            notifyFailed()
        }
    }, [coupon])
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
            <form className={classes.Coupon} onSubmit={handleSubmit(applyCouponHandler)}>
                <h1>COUPON CODE</h1>
                <input type='text' {...register('Coupon')} disabled={couponApplied} />
                <input className={classes.button} type='submit' value='Apply' disabled={couponApplied} />
            </form>
        </>

    )
}

export default CouponCode
