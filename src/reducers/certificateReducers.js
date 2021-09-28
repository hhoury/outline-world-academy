import {
    CERTIFICATE_LIST_FAIL,
    CERTIFICATE_LIST_SUCCESS,
    CERTIFICATE_LIST_REQUEST,
    CERTIFICATE_DETAILS_REQUEST,
    CERTIFICATE_DETAILS_SUCCESS,
    CERTIFICATE_DETAILS_FAIL}
    from '../constants/certificatesConstants'

export const courseListReducer = (state = { certificates: [] }, action) => {
    switch (action.type) {
        case CERTIFICATE_LIST_REQUEST:
            return { loading: true, certificates: [] }
        case CERTIFICATE_LIST_SUCCESS:
            return { loading: false, certificates: action.payload }
        case CERTIFICATE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const certificateDetailsReducer = (state = { certificate: {} }, action) => {
    switch (action.type) {
        case CERTIFICATE_DETAILS_REQUEST:
            return { loading: true, ...state }
        case CERTIFICATE_DETAILS_SUCCESS:
            return { loading: false, certificate: action.payload }
        case CERTIFICATE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}