import React from 'react'
import classes from './MyCoursesItem.module.css'
import Button from '../UI/Button'
import { Link, useHistory } from 'react-router-dom'
import { ProgressBar } from 'react-bootstrap'
import mycourses from '../../assets/mycourses.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyCoursesItem = (props) => {
    const history = useHistory();
    const viewCourseHandler = () => {
        history.push('/courses/'+ props.id)
    }

    return (
        <div className={`${classes['my-couses-item']} mr-auto`}>
            <figure>
                <LazyLoadImage src={mycourses} alt={props.title} />
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
                <Button onClick={viewCourseHandler}  className={classes.btn}>View Course</Button>
            </div>
        </div>
    )
}

export default MyCoursesItem
