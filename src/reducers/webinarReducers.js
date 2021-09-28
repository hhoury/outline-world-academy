import {
    WEBINAR_LIST_FAIL,
    WEBINAR_LIST_SUCCESS,
    WEBINAR_LIST_REQUEST,
    WEBINAR_DETAILS_REQUEST,
    WEBINAR_DETAILS_SUCCESS,
    WEBINAR_DETAILS_FAIL} from '../constants/webinarsConstants'

export const courseListReducer = (state = { webinars: [] }, action) => {
    switch (action.type) {
        case WEBINAR_LIST_REQUEST:
            return { loading: true, webinars: [] }
        case WEBINAR_LIST_SUCCESS:
            return { loading: false, webinars: action.payload }
        case WEBINAR_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const webinarDetailsReducer = (state = { webinar: {} }, action) => {
    switch (action.type) {
        case WEBINAR_DETAILS_REQUEST:
            return { loading: true, ...state }
        case WEBINAR_DETAILS_SUCCESS:
            return { loading: false, webinar: action.payload }
        case WEBINAR_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}