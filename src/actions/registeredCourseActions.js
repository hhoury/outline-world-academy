import axios from 'axios'
import {
    REGISTERED_COURSE_LIST_FAIL,
    REGISTERED_COURSE_LIST_SUCCESS,
    REGISTERED_COURSE_LIST_REQUEST,
    REGISTERED_COURSE_DETAILS_REQUEST,
    REGISTERED_COURSE_DETAILS_SUCCESS,
    REGISTERED_COURSE_DETAILS_FAIL,
    IS_REGISTERED_COURSE_FAIL,
    IS_REGISTERED_COURSE_SUCCESS,
    IS_REGISTERED_COURSE_REQUEST,
} from '../constants/registeredCoursesConstants'
import { API } from '../constants/appConstants'
import Cookies from 'js-cookie'

export const registeredListCourses = (studentId) => async (dispatch) => {
    try {
        dispatch({ type:     REGISTERED_COURSE_LIST_REQUEST,
        })

        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(API + 'Enrollments/get-courses', {studentId},config)
        dispatch({
            type: REGISTERED_COURSE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTERED_COURSE_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const registeredCourseDetails = (id) => async (dispatch) => {
    try {
        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({ type: REGISTERED_COURSE_DETAILS_REQUEST })
        const { data } = await axios.post(API + 'Enrollments/get-course', {id},config)
        dispatch({
            type: REGISTERED_COURSE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: REGISTERED_COURSE_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const isRegisteredCourse = (studentId,courseId) => async (dispatch) => {
    const token = Cookies.get('accessToken')
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    try {
        dispatch({ type: IS_REGISTERED_COURSE_REQUEST })
        const { data } = await axios.post(API + 'Enrollments/is-enrolled', { courseId}, config)
        dispatch({
            type: IS_REGISTERED_COURSE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: IS_REGISTERED_COURSE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}