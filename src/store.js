import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from './reducers/cartReducers'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userDeleteReducer,
  userUpdateReducer,
  resetPasswordReducer,
  changePasswordReducer,
  validateTokenReducer
} from './reducers/userReducers';
import { courseListReducer, courseDetailsReducer, featuredCourseListReducer } from './reducers/courseReducers';
import { chapterDetailsReducer } from './reducers/chapterReducers';
import { orderReducer, couponReducer } from './reducers/orderReducers'
import {registeredCourseListReducer,registeredCourseDetailsReducer,isRegisterdCourseReducer} from './reducers/registeredCourseReducers'
import Cookies from "js-cookie";

const reducer = combineReducers({
  courseChapters: chapterDetailsReducer,
  courseDetails: courseDetailsReducer,
  courseList: courseListReducer,
  featuredCourseList: featuredCourseListReducer,
  enrollmentsList: registeredCourseListReducer,
  registeredCourseDetails: registeredCourseDetailsReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  resetPassword: resetPasswordReducer,
  changePassword: changePasswordReducer,
  order: orderReducer,
  cart: cartReducer,
  coupon: couponReducer,
  isRegisteredCourse: isRegisterdCourseReducer,
  token: validateTokenReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const totalAmountFromStorage = localStorage.getItem('totalAmount')
  ? JSON.parse(localStorage.getItem('totalAmount'))
  : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

// const paymentInfoFromStorage = localStorage.getItem('paymentInfo')
//   ? JSON.parse(localStorage.getItem('paymentInfo'))
//   : {}

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
//#endregion

const initialState = {
  cart:
  {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    totalAmount: totalAmountFromStorage ? totalAmountFromStorage : 0,
    // paymentInfo: paymentInfoFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store