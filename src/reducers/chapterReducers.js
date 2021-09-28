import {
    CHAPTER_LIST_FAIL,
    CHAPTER_LIST_SUCCESS,
    CHAPTER_LIST_REQUEST,
    CHAPTER_DETAILS_REQUEST,
    CHAPTER_DETAILS_SUCCESS,
    CHAPTER_DETAILS_FAIL}
from '../constants/chaptersConstants'

export const chapterListReducer = (state = { chapters: [] }, action) => {
    switch (action.type) {
        case CHAPTER_LIST_REQUEST:
            return { loading: true, chapters: [] }
        case CHAPTER_LIST_SUCCESS:
            return { loading: false, chapters: action.payload }
        case CHAPTER_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const chapterDetailsReducer = (state = { chapter: {} }, action) => {
    switch (action.type) {
        case CHAPTER_DETAILS_REQUEST:
            return { loading: true, ...state }
        case CHAPTER_DETAILS_SUCCESS:
            return { loading: false, chapter: action.payload }
        case CHAPTER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}