import React from 'react'
import classes from './RightMenu.module.css'
import {Link} from 'react-router-dom'
const RightMenu = (props) => {
    return (
        <div className={classes['right-menu']}>
            <ul>
                <li><Link to='/profile'><i className="fal fa-user"></i></Link></li>
                <li><Link to='/cart'><i className="fal fa-shopping-bag"></i></Link></li>
                <li><Link to='/'><i className="fal fa-search"></i></Link></li>
            </ul>
        </div>
    )
}

export default RightMenu
