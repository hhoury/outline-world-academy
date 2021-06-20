import React from 'react'
import classes from './MyCoursesItem.module.css'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap'
import mycourses from '../../assets/mycourses.jpg'
const MyCoursesItem = (props) => {

    return (
        <div className={`${classes['my-couses-item']} mr-auto`}>
            <figure>
                <img src={mycourses} alt={props.title} />
            </figure>
            <div className={classes.details}>
                <h2>{props.title}</h2>
                <span>{props.chapters} chapters</span>
                <span>{props.lessons} lessons</span>
                <span><Link to='/'>Course Certificate</Link></span>
                <div className={classes.progress}>
                    <p>%{props.progress} Complete</p>
                    <ProgressBar now={props.progress} />
                </div>
                <Button className={classes.btn}>View Course</Button>
            </div>
        </div>
    )
}

export default MyCoursesItem
