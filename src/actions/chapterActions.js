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
export const listCourseChapterDetails = (courseId, chapterId) => async (dispatch) => {
    try {
        dispatch({ type: CHAPTER_DETAILS_REQUEST })
        const { data } = await axios.get(`${API}courses/${courseId}/chapter/${chapterId}`)
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

export const listCourseChapters = (courseId) => async (dispatch) => {
    try {
        dispatch({ type: CHAPTER_LIST_REQUEST })
        const { data } = await axios.get(`${API}chapters/course/${courseId}`)
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