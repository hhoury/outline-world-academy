import axios from "axios";
import {
    CHAPTER_LIST_REQUEST,
    CHAPTER_LIST_SUCCESS,
    CHAPTER_LIST_FAIL,
    CHAPTER_DETAILS_REQUEST,
    CHAPTER_DETAILS_SUCCESS,
    CHAPTER_DETAILS_FAIL
} from '../constants/chaptersConstants'
import { API } from '../constants/appConstants'
import Cookies from 'js-cookie'

export const listCourseChapterDetails = (chapter_id) => async (dispatch) => {
    try {
        dispatch({ type: CHAPTER_DETAILS_REQUEST })
        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`${API}courses/chapter_lessons/`,{chapter_id},config)
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

export const listCourseChapters = (course_id) => async (dispatch) => {
    try {
        const token = Cookies.get('accessToken')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }
        dispatch({ type: CHAPTER_LIST_REQUEST })
        const { data } = await axios.post(`${API}courses/course_details/`,{course_id},{config})
        dispatch({
            type: CHAPTER_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CHAPTER_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}