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

export const registeredListCourses = (studentId) => async (dispatch) => {
    try {
        dispatch({ type:     REGISTERED_COURSE_LIST_REQUEST,
        })
        const { data } = await axios.post(API + 'Enrollments/get-courses', {studentId})
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
        dispatch({ type: REGISTERED_COURSE_DETAILS_REQUEST })
        const { data } = await axios.post(API + 'Enrollments/get-course')
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
    try {
        dispatch({ type: IS_REGISTERED_COURSE_REQUEST })
        const { data } = await axios.post(API + 'Enrollments/is-enrolled', {studentId, courseId})
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