import React, { useState, useRef } from 'react'
import classes from './RightMenu.module.css'
import { Link } from 'react-router-dom'
import { Overlay, Popover } from 'react-bootstrap'
const RightMenu = (props) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };
    const logoutHandler = () => {
        
    }
    return (
        <>
            <div className={classes['right-menu']}>
                <ul>
                    <li><Link onClick={handleClick} ><i className="fal fa-user"></i></Link></li>
                    <li><Link to='/cart'><i className="fal fa-shopping-bag"></i></Link></li>
                    <li><Link to='/'><i className="fal fa-search"></i></Link></li>
                </ul>
            </div>
            <Overlay className={classes.overlay}
                show={show}
                target={target}
                placement="bottom"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-contained">

                    <Popover.Content>
                        <ul>
                            <li>
                                <Link to='/my-courses'>
                                    <span><i class="fas fa-books"></i></span>Courses
                                </Link>
                            </li>
                            <li>
                                <Link to='/profile'>
                                    <span><i class="far fa-cog"></i></span>Account</Link></li>
                            <li>
                                <Link onClick={logoutHandler}>
                                    <span><i class="fal fa-sign-out"></i></span>Log out
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
