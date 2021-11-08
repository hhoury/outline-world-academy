import {REGISTERED_COURSE_LIST_FAIL,
    REGISTERED_COURSE_LIST_SUCCESS,
    REGISTERED_COURSE_LIST_REQUEST,
    REGISTERED_COURSE_DETAILS_REQUEST ,
REGISTERED_COURSE_DETAILS_SUCCESS ,
REGISTERED_COURSE_DETAILS_FAIL,
IS_REGISTERED_COURSE_FAIL,
IS_REGISTERED_COURSE_REQUEST,
IS_REGISTERED_COURSE_SUCCESS,
} from '../constants/registeredCoursesConstants'

export const registeredCourseListReducer = (state = { data: {enrollments: [], courses: []} }, action) => {
    switch (action.type) {
        case REGISTERED_COURSE_LIST_FAIL:
            return { loading: true, data: {enrollments: [], courses: []} }
        case REGISTERED_COURSE_LIST_SUCCESS:
            return { loading: false, data: action.payload }
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

export const isRegisterdCourseReducer = (state = {data: false}, action) => {
    switch (action.type) {
        case IS_REGISTERED_COURSE_FAIL:
            return { loading: true, data: {} }
        case IS_REGISTERED_COURSE_SUCCESS:
            return { loading: false, data: action.payload }
        case IS_REGISTERED_COURSE_REQUEST:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
