import axios from 'axios'
import {
    COURSE_LIST_FAIL,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_REQUEST,
    COURSE_DETAILS_REQUEST,
    COURSE_DETAILS_SUCCESS,
    COURSE_DETAILS_FAIL,
    CHAPTER_DETAILS_REQUEST,
    CHAPTER_DETAILS_SUCCESS,
    CHAPTER_DETAILS_FAIL
} from '../constants/courseConstants'
//redux thunk add function within a function
export const listCourses = () => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LIST_REQUEST })
        const { data } = await axios.get('https://localhost:44362/api/courses')
        console.log('courses actions');
        console.log(data);
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

export const listCourseDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DETAILS_REQUEST })
        const { data } = await axios.get(`https://localhost:44362/api/courses/${id}`)
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

export const listCourseChapterDetails = (courseId, chapterId) => async (dispatch) => {
    try {
        dispatch({ type: CHAPTER_DETAILS_REQUEST })
        const { data } = await axios.get(`https://localhost:44362/api/courses/${courseId}/chapter/${chapterId}`)
        dispatch({
            type: CHAPTER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CHAPTER_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}