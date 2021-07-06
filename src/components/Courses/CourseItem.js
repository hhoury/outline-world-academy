import React from 'react'
import { Link } from 'react-router-dom'
import classes from './CourseItem.module.css'
const CourseItem = (props) => {
    return (
        <li key={props.id} className={`col-lg-4 col-md-4 col-sm-6 ${classes['course-item']}`} >
            <figure>
                <img src={props.thumbnail} alt={props.title} />
            </figure>
            <h1>{props.title}</h1>
            <Link to={`/courses/${props.id}`}>View Course Details</Link>
        </li>
    )
}

export default CourseItem
