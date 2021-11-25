import React from 'react'
import classes from './CourseChapters.module.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const CourseChapters = (props) => {
    return (
        <li className={`${classes.CourseChapter} row`}>
            <div className={classes.chapterNumber}>{props.number}.</div>
            <div className={`col-md-6 col-sm-12 ${classes.courseThumbnail}`}>
                <Link to={`/courses/${props.courseId}/chapter/${props.id}`}>
                    <figure className={classes.chapterFigure}>
                        <LazyLoadImage src={props.thumbnail} alt={props.title} />
                    </figure>
                </Link>
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
