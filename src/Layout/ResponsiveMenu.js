import React from 'react'
import classes from './ResponsiveMenu.module.css'
import { NavLink } from 'react-router-dom'
const ResponsiveMenu = () => {
    return (
        <div className={classes['responsive-wrap']}>
            <input type="checkbox" className={classes.toggler} />
            <div className={classes.hamburger} >
                <div></div>
            </div>
            <div className={classes.responsive}>
                <div>
                    <div>
                        <ul>
                            <li><NavLink activeClassName={classes.active} exact to='/home'>Home</NavLink></li>
                            <li><NavLink activeClassName={classes.active} to='/about-us'>about</NavLink></li>
                            <li>
                                <NavLink activeClassName={classes.active} to='/courses'>courses</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName={classes.active} to='/blog'>blog</NavLink>
                            </li>
                            <li><NavLink activeClassName={classes.active} to='/contact-us'>contact us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
