import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CourseChapters from '../components/Courses/CourseChapters'
import { useParams } from 'react-router'
import { listCourseDetails } from '../actions/courseActions'
import { useDispatch, useSelector } from 'react-redux'

const EnrolledCourseDetailsPage = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const courseDetails = useSelector((state) => state.courseDetails)
    const course = courseDetails.course.coures_details
    
    useEffect(() => {
        dispatch(listCourseDetails(id))
    }, [id])

    return (
        <>
            {/* {isEnrolled && ( */}
            <div className='enrolled-course-details' >
                <Header fullMenu={false} withName={true} />
                <h1>{course?.title}
                </h1>
                <div className='course-chapters'>
                    <h2>Course Chapters</h2>
                    <ul>
                        {
                            course?.chapters?.map((chapter, index) =>
                                <CourseChapters key={chapter.id} id={chapter.id} courseId={course.course_id} number={index + 1} title={chapter.title} thumbnail={chapter.thumbnail} description={chapter.description} />)
                        }
                    </ul>
                </div>
                <Footer />
            </div>
            {/* )} */}
        </>
    )
}

export default EnrolledCourseDetailsPage
