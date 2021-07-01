import React, { useState, useRef } from 'react'
import classes from './RightMenu.module.css'
import { Link } from 'react-router-dom'
import { Overlay, Popover } from 'react-bootstrap'


const RightMenu = (props) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const userMenuHandler = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const logoutHandler = () => {
        
    }
   
    return (
        <>
            <div className={classes['right-menu']}>
                <ul>
                    <li><button className={classes.btn} onClick={userMenuHandler}  ><i className="fal fa-user"></i></button></li>
                    <li><Link to='/cart'><i className="fal fa-shopping-bag"></i></Link></li>
                    <li><Link to='/home'><i className="fal fa-search"></i></Link></li>
                </ul>
            </div>
            <Overlay className={classes.overlay}
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                {/* <Popover id="popover-contained">
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
                </Popover> */}

                <Popover id="popover-contained">
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
                            <li>
                                <Link to='/password-reset'>
                                    <span>Password Reset</span>
                                </Link>
                            </li>
                        </ul>
                    </Popover.Content>
                </Popover>
            </Overlay>
        </>
    )
}

export default RightMenu
