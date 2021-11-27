import React from 'react'
import classes from './CourseChapterDetails.module.css'
import {Link} from 'react-router-dom'

const CourseChapterDetails = (props) => {

    return (
        <div className={classes.CourseChapterDetails}>
            <div>
                <Link to={`/courses/${props.courseId}/chapter/${props.chapterId}/${props.id}`}>
                <h1 className={props.progress !== 100?  classes.highlighted : ''}>chapter {props.number} {props.title}</h1>
                </Link>
                {props.progress === 100 && <p>Completed</p>}
            </div>
        </div>
    )
}

export default CourseChapterDetails
