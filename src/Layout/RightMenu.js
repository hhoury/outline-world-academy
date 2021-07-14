import React, { useState, useRef, useContext } from 'react'
import classes from './RightMenu.module.css'
import { Link, useHistory } from 'react-router-dom'
import { Overlay, OverlayTrigger, Popover } from 'react-bootstrap'
import CartContext from '../store/cart-context'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

// on mouse enter , open
// on mouse leave  , set timeout then close

const RightMenu = (props) => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

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


    
    const cartCtx = useContext(CartContext);


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

    return (
        <>
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
                            overlay={userInfo? loggedInUserPopover : nonLoggedUserPopover}
                        >
                            <button id='menuButton'
                                className={classes.btn}
                                onClick={userMenuHandler}  ><i className="fal fa-user"></i>
                            </button>

                        </OverlayTrigger>

                    </li>
                    <li className={classes.shoppingCart}>

                        <button className={classes.cartButton}
                            onClick={cartClickHandler}
                        >
                            <i className="fal fa-shopping-bag"></i>
                        </button>

                        {cartCtx.items.length !== 0 && <span>{cartCtx.items.length}</span>}
                    </li>
                    <li><Link to='/home'><i className="fal fa-search"></i></Link></li>
                </ul>
            </div>

        </>
    )
}

export default RightMenu
