import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
// eslint-disable-next-line
import ForgotPasswordPage from './pages/ForgotPasswordPage';
// eslint-disable-next-line
import SigninPage from './pages/SigninPage';
// eslint-disable-next-line
import SignupPage from './pages/SignupPage';
// eslint-disable-next-line
import ContactUsPage from './pages/ContactUsPage';
// eslint-disable-next-line
import PolicyPage from './pages/PolicyPage';
// eslint-disable-next-line
import AboutPage from './pages/AboutPage';
// eslint-disable-next-line
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import CartPage from './pages/CartPage';


const App = () => {
   return (
      <div>
         <main>
            <Switch>
               <Route path='/about'><AboutPage /></Route>
               <Route path='/cart'><CartPage /></Route>
               <Route path='/blog'><BlogPage /></Route>
               <Route path='/contact-us'><ContactUsPage /></Route>
               <Route path='/courses'><CoursesPage /></Route>
               <Route path='/policy'><PolicyPage /></Route>
               <Route path='/sign-up'><SignupPage /></Route>
               <Route path='/sign-in'><SigninPage /></Route>
               <Route path='/password-reset'><ForgotPasswordPage /></Route>
               <Route path='/' exact>
                  <Redirect to='/home' />
               </Route>
               <Route path='/home'><HomePage /></Route>
               <Route path='*'>
                  <NotFoundPage />
               </Route>
            </Switch>

         </main>
      </div>
   )
}

export default App;
