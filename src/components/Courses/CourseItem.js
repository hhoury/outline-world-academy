import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CourseItem.module.css'
const CourseItem = (props) => {
    return (
        <li key={props.id} className={`col-lg-5 col-md-5 col-sm-12 ${classes['course-item']}`} >
            <figure>
                <img src={props.thumbnail} alt={props.title} />
            </figure>
            <h1>{props.title}</h1>
            <Link to={`/courses/${props.id}`}>View Course Details</Link>
        </li>
    )
}

export default CourseItem
