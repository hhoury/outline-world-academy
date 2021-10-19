import axios from "axios"
import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_LOGOUT_FAIL,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    PASSWORD_RESET_REQUEST,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_CHANGE_REQUEST,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_FAIL
} from "../constants/userConstants"
import {API} from '../constants/appConstants'
import Cookies from 'js-cookie'
export const createAccount = (name, email, password, confirmPassword) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const { res } = await axios.post(API + 'Accounts/register/', {name, email, password, confirmPassword})
        console.log(res);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const { data } = await axios.post(API + 'Accounts/authenticate/', { email, password })
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}
export const logout = () => async (dispatch) => {
    try {
        // const { data } = await axios.post(API + 'Accounts/logout/')

        localStorage.removeItem('cartItems')
        localStorage.removeItem('shippingAddress')
        localStorage.removeItem('totalAmount')
        localStorage.removeItem('paymentInfo')
        localStorage.removeItem('userInfo')

        dispatch({ type: USER_LOGOUT })
        document.location.href = '/'
    }
    catch (error) {
        dispatch({
            type: USER_LOGOUT_FAIL
        })
    }
}

export const resetPassword = (email) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PASSWORD_RESET_REQUEST
        })

        const { data } = await axios.post(API + 'Accounts/forgot-password/ ', { email })
        dispatch({
            type: PASSWORD_RESET_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PASSWORD_RESET_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const changePassword =  (token, password, confirmPassword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PASSWORD_CHANGE_REQUEST
        })

        const { data } = await axios.post(API + 'Accounts/reset-password/ ', {token, password, confirmPassword })
        
        dispatch({
            type: PASSWORD_CHANGE_SUCCESS,
            payload: data,
            success: true
        })
    } catch (error) {
        dispatch({
            type: PASSWORD_CHANGE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {

    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const token = Cookies.get('refreshToken')

        console.log(token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(API + `Accounts/${id}`, config)
        console.log(data);
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const updateUserProfile = (user) => async (dispatch, getState) => {

    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(API + `Account/profile`, user, config)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

