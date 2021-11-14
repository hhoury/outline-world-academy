import axios from "axios";
import {
    LESSONS_LIST_REQUEST,
    LESSONS_LIST_SUCCESS,
    LESSONS_LIST_FAIL,
    LESSON_DETAILS_REQUEST,
    LESSON_DETAILS_SUCCESS,
    LESSON_DETAILS_FAIL
} from '../constants/lessonsConstants'
import { API } from '../constants/appConstants'
import Cookies from 'js-cookie'

export const listCourseChapterDetails = (courseId, chapterId) => async (dispatch) => {
    try {
        dispatch({ type: LESSON_DETAILS_REQUEST })
        const { data } = await axios.get(`${API}courses/${courseId}/chapter/${chapterId}`)
        dispatch({
            type: LESSON_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSON_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const listCourseLessons = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: LESSONS_LIST_REQUEST })
        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        const { data } = await axios.post(`${API}chapters/course/${courseId}}`, null, config)
        dispatch({
            type: LESSONS_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LESSONS_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

// export const listCourseLessons = (courseId) => async (dispatch) => {
//     try {
//         dispatch({ type: CHAPTERS_LIST_REQUEST })
//         const token = Cookies.get('accessToken')
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`
//             }
//         }
//         const { data } = await axios.post(`${API}chapters/course/${courseId}}`, null, config)
//         dispatch({
//             type: CHAPTERS_LIST_SUCCESS,
//             payload: data
//         })
//     } catch (error) {
//         dispatch({
//             type: CHAPTERS_LIST_FAIL,
//             payload: error.response && error.response.data.message
//                 ? error.response.data.message
//                 : error.message
//         })
//     }
// }