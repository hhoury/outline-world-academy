import React, { useState, useRef,useContext } from 'react'
import classes from './RightMenu.module.css'
import { Link } from 'react-router-dom'
import { Overlay, Popover } from 'react-bootstrap'
import CartContext from '../store/cart-context'



const RightMenu = (props) => {

    const cartCtx = useContext(CartContext);


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
                    <li className={classes.shoppingCart}>
                        <Link to='/cart'><i className="fal fa-shopping-bag"></i></Link>
                   {cartCtx.items.length !== 0 &&     <span>{cartCtx.items.length}</span>}
                    </li>
                    <li><Link to='/home'><i className="fal fa-search"></i></Link></li>
                </ul>
            </div>
            <Overlay 
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                {/* <Popover id="menu-popover-contained">
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

                <Popover id="menu-popover-contained">
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
                </Popover>
            
            </Overlay>
        </>
    )
}

export default RightMenu
