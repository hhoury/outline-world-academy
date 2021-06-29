import React from 'react'
import classes from './CourseChapters.module.css'
import thumbnail from '../../assets/chapter-thumbnail.png'

const CourseChapters = (props) => {
    return (
        <li className={`${classes.CourseChapter} row`}>
            <div className={classes.chapterNumber}>{props.number}.</div>
            <div className={`col-md-6 col-sm-12 ${classes.courseThumbnail}`}>
                <figure>
                    <img src={thumbnail} alt={props.title} />
                </figure>
                <div className={classes.border}></div>
            </div>

            <div className={`${classes.courseDescription} col-md-6 col-sm-12`}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    )
}

export default CourseChapters
