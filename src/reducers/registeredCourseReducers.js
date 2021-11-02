import {REGISTERED_COURSE_LIST_FAIL,
    REGISTERED_COURSE_LIST_SUCCESS,
    REGISTERED_COURSE_LIST_REQUEST,
    REGISTERED_COURSE_DETAILS_REQUEST ,
REGISTERED_COURSE_DETAILS_SUCCESS ,
REGISTERED_COURSE_DETAILS_FAIL    
} from '../constants/registeredCoursesConstants'

export const registeredCourseListReducer = (state = { courses: [] }, action) => {
    switch (action.type) {
        case REGISTERED_COURSE_LIST_FAIL:
            return { loading: true, courses: [] }
        case REGISTERED_COURSE_LIST_SUCCESS:
            return { loading: false, courses: action.payload }
        case REGISTERED_COURSE_LIST_REQUEST:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const registeredCourseDetailsReducer = (state = { course: {} }, action) => {
    switch (action.type) {
        case REGISTERED_COURSE_DETAILS_REQUEST:
            return { loading: true, ...state }
        case REGISTERED_COURSE_DETAILS_SUCCESS:
            return { loading: false, course: action.payload }
        case REGISTERED_COURSE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}