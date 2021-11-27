import React, { useState, useRef } from 'react'
import classes from './RightMenu.module.css'
import { Link, useHistory } from 'react-router-dom'
import {  OverlayTrigger, Popover } from 'react-bootstrap'
import { logout, validateToken } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import SearchModal from '../components/UI/SearchModal'
import Cookies from 'js-cookie'


const RightMenu = (props) => {
    const dispatch = useDispatch()
    const isLoggedIn = Cookies.get('accessToken')
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    

    const logoutHandler = () => {
        dispatch(logout())
    }
    const loggedInUserPopover = (<Popover id="menu-popover-contained">
        <Popover.Content>
            <ul>
                <li>
                    <Link to='/my-courses'>
                        <span><i className="fas fa-books"></i></span>Courses
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <span><i className="far fa-cog"></i></span>Account</Link></li>
                <li>
                    <button className={classes.logoutBtn} onClick={logoutHandler}>
                        <span><i className="fal fa-sign-out"></i></span>Log out
                    </button>
                </li>
            </ul>
        </Popover.Content>
    </Popover>);

    const nonLoggedUserPopover = (<Popover id="menu-popover-contained">
        <Popover.Content>
            <ul>
                <li>
                    <Link to='/sign-in'>
                        <span><i className="fal fa-sign-in"></i></span>Login
                    </Link>
                </li>
                <li>
                    <Link to='/sign-up'>
                        <span><i className="fal fa-user-plus"></i></span>Signup
                    </Link>
                </li>

            </ul>
        </Popover.Content>
    </Popover>);

    const history = useHistory();

    const [showUserMenu, setShowUserMenu] = useState(false);
    const [targetUserMenu, setTargetUserMenu] = useState(null);
    const ref = useRef(null);
    const userMenuHandler = (event) => {
        setShowUserMenu(!showUserMenu);
        setTargetUserMenu(event.target);
    }

    const cartClickHandler = () => {
        history.push('/cart')
    }
    const [searchOverlayIsShowing, setSearchOverlayIsShowing] = useState(false)
    const showSearchOverlayHandler = () => {
       setSearchOverlayIsShowing(true)
    }
    const hideSearchOverlayHandler = () => {
       setSearchOverlayIsShowing(false);
    }
    return (
        <>
          {searchOverlayIsShowing && <SearchModal onClose={hideSearchOverlayHandler}/>}
            <div className={classes['right-menu']}>
                <ul>
                    <li>
                        <OverlayTrigger
                            trigger={'focus, hover'}
                            show={showUserMenu}
                            target={targetUserMenu}
                            placement="bottom"
                            container={ref.current}
                            containerPadding={20}
                            rootClose={true}
                            onHide={userMenuHandler}
                            overlay={isLoggedIn ? loggedInUserPopover : nonLoggedUserPopover}
                        >
                            <button id='menuButton'
                                className={classes.btn}
                                onClick={userMenuHandler}><i className="fal fa-user"></i>
                            </button>

                        </OverlayTrigger>

                    </li>
                    <li className={classes.shoppingCart}>

                        <button className={classes.cartButton}
                            onClick={cartClickHandler}
                        >
                            <i className="fal fa-shopping-bag"></i>
                        </button>

                        {cartItems.length !== 0 && <span>{cartItems.length}</span>}
                    </li>
                    <li><button onClick={showSearchOverlayHandler} className={classes.searchBtn}><i className="fal fa-search"></i></button></li>
                </ul>
            </div>

        </>
    )
}

export default RightMenu
