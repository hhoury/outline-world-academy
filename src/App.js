import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import ContactUsPage from './pages/ContactUsPage';
import PolicyPage from './pages/PolicyPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';
import PasswordModal from './components/UI/PasswordModal'
import React, { useState } from 'react'
import MyCoursesPage from './pages/MyCoursesPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import PaymentPage from './pages/PaymentPage';
import CourseDetailsPage from './pages/CourseDetailsPage'
import EnrolledCourseDetailsPage from './pages/EnrolledCourseDetailsPage'
import ChapterDetailsPage from './pages/ChapterDetailsPage'
import CourseChapterLessonPage from './pages/CourseChapterLessonPage'
import OrderReviewPage from './pages/OrderReviewPage'
import NewPasswordPage from './pages/NewPasswordPage';
import Cookies from 'js-cookie'

const App = () => {
   
   const [passwordModalIsShowing, setPasswordModalIsShowing] = useState(false)
   const showPasswordModalHandler = () => {
      setPasswordModalIsShowing(true)
   }
   const hidePasswordModalHandler = () => {
      setPasswordModalIsShowing(false);
   }

   const isLoggedIn = Cookies.get('accessToken')
   
   if (!isLoggedIn) {
      localStorage.removeItem('cartItems')
      localStorage.removeItem('totalAmount')
      localStorage.removeItem('shippingAddress')
      localStorage.removeItem('userInfo')
      localStorage.removeItem('userLogin')
   }
   return (
      <>
         {passwordModalIsShowing && <PasswordModal onClose={hidePasswordModalHandler} />}
         <main>
            <Switch>
               <Route path='/sign-up'><SignupPage /></Route>
               <Route path='/sign-in'><SigninPage /></Route>
               <Route path='/cart'><CartPage /></Route>
               <Route path='/order-details'><OrderDetailsPage /></Route>
               <Route path='/billing-details'>
                  {
                     isLoggedIn ?
                        <PersonalDetailsPage />
                        :
                        <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/order-review'>
                  {isLoggedIn ?
                     <OrderReviewPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/payment'>
                  {isLoggedIn ?
                     <PaymentPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/courses/:id/chapter/:chid/:lid'>
                  {isLoggedIn ?
                     <CourseChapterLessonPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/courses/:id/chapter/:chid'>
                  {isLoggedIn ?
                     <ChapterDetailsPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }

               </Route>
               <Route path='/my-courses/:id'>
                  {isLoggedIn ?
                     <EnrolledCourseDetailsPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/courses/:id' exact>
                  <CourseDetailsPage />
               </Route>
               <Route path='courses?search=keyword'  ><CoursesPage /></Route>
               <Route path='/courses'><CoursesPage /></Route>
               <Route path='/my-courses'>
                  {isLoggedIn ?
                     <MyCoursesPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/profile/'>
                  {isLoggedIn ?
                     <ProfilePage onClose={hidePasswordModalHandler} onShowPasswordModal={showPasswordModalHandler} />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
             
               <Route path='/forgot-password'><ForgotPasswordPage /></Route>
               <Route path='/about-us'><AboutPage /></Route>
               <Route path='/blog'><BlogPage /></Route>
               <Route path='/contact-us'><ContactUsPage /></Route>
               <Route path='/policy'><PolicyPage /></Route>
               <Route path='/password-reset-confirm/:uid/:token'>
                  <NewPasswordPage />
               </Route>
               <Route path='/payment'>
                  {isLoggedIn ?
                     <PaymentPage />
                     :
                     <Redirect to={{ pathname: '/sign-in' }} />
                  }
               </Route>
               <Route path='/our-world'><HomePage /></Route>
               <Route path='/' exact>
                  <Redirect to='/our-world' />
               </Route>
               <Route path='*'>
                  <NotFoundPage />
               </Route>
            </Switch>
         </main>
      </>
   )
}

export default App;
