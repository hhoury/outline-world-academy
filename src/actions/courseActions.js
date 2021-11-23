import axios from 'axios'
import {
    COURSE_LIST_FAIL,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_REQUEST,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    FEATURED_COURSE_LIST_REQUEST,
    FEATURED_COURSE_LIST_FAIL,
    FEATURED_COURSE_LIST_SUCCESS
} from '../constants/courseConstants'
import { API } from '../constants/appConstants'
import Cookies from 'js-cookie'
//redux thunk add function within a function

export const  listCourses = () => async (dispatch) => {
    try {
        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({ type: COURSE_LIST_REQUEST })
        const { data } = await axios.get(API + 'courses/courses/',config)
        dispatch({
            type: COURSE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
export const listFeaturedCourses = () => async (dispatch) => {
    try {
        dispatch({ type: FEATURED_COURSE_LIST_REQUEST })
        const { data } = await axios.get(API + 'courses/featured_courses/')
        dispatch({
            type: FEATURED_COURSE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FEATURED_COURSE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}
export const listCourseDetails = (courseId) => async (dispatch) => {
    try {
        const token = Cookies.get('accessToken')
        const course_id = parseInt(courseId) 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({ type: COURSE_DETAILS_REQUEST })
        const { data } = await axios.post(API + 'courses/course_details/', {course_id},config)
        dispatch({
            type: COURSE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: COURSE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}


