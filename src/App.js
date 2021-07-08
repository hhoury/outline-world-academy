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
import React, {useState} from 'react'
import MyCoursesPage from './pages/MyCoursesPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import PersonalDetailsPage from './pages/PersonalDetailsPage';
import PaymentPage from './pages/PaymentPage';
import CourseDetailsPage from './pages/CourseDetailsPage'
import ChapterDetailsPage from './pages/ChapterDetailsPage'
import CourseChapterLessonPage from './pages/CourseChapterLessonPage'
import CartProvider from './store/CartProvider';

const App = () => {
   const [passwordModalIsShowing, setPasswordModalIsShowing] = useState(false)
   const showPasswordModalHandler = () => {
      setPasswordModalIsShowing(true)
   }
   const hidePasswordModalHandler= () => {
      setPasswordModalIsShowing(false);
   }
   return (
      <CartProvider>
         {passwordModalIsShowing && <PasswordModal onClose={hidePasswordModalHandler} />}
         <main>
            <Switch>
               

               <Route path='/cart'><CartPage /></Route>
               <Route path='/order-details'><OrderDetailsPage /></Route>
               <Route path='/personal-details'><PersonalDetailsPage /></Route>
               <Route path='/payment'><PaymentPage /></Route>

               <Route path='/courses/:id/chapter/:id/:id'><CourseChapterLessonPage /></Route>
               <Route path='/courses/:id/chapter/:id'><ChapterDetailsPage /></Route>
               <Route path='/courses/:id'><CourseDetailsPage /></Route>
               <Route path='/courses'><CoursesPage /></Route>
               <Route path='/my-courses'><MyCoursesPage /></Route>
               
               <Route path='/profile'><ProfilePage onClose={hidePasswordModalHandler} onShowPasswordModal={showPasswordModalHandler}/></Route>
               <Route path='/sign-up'><SignupPage /></Route>
               <Route path='/sign-in'><SigninPage /></Route>
               <Route path='/password-reset'><ForgotPasswordPage /></Route>

               <Route path='/about-us'><AboutPage /></Route>
               <Route path='/blog'><BlogPage /></Route>
               <Route path='/contact-us'><ContactUsPage /></Route>
               <Route path='/policy'><PolicyPage /></Route>
               <Route path='/' exact>
                  <Redirect to='/home' />
               </Route>
               <Route path='/home'><HomePage /></Route>
               <Route path='*'>
                  <NotFoundPage />
               </Route>
            </Switch>

         </main>
      </CartProvider>
   )
}

export default App;
