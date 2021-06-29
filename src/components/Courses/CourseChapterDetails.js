import React from 'react'
import classes from './CourseChapterDetails.module.css'

const CourseChapterDetails = (props) => {

    return (
        <div className={classes.CourseChapterDetails}>
            <div>
                <h1 className={props.progress !== 100 && classes.highlighted}>chapter {props.number} {props.title}</h1>
                {props.progress === 100 && <p>Completed</p>}
            </div>
        </div>
    )
}

export default CourseChapterDetails
