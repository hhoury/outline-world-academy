import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const CourseChapterLessonPage = () => {
    const course = { id: 1, title: 'corona renderer' }
    const lesson = {id: 1, title: 'Lorem Ipsum Dolor',number: '1.3'}


    return (
        <div className='course-details' >
            <Header fullMenu={false} />

            <h1>{course.title}</h1>
            <p>{lesson.title}</p>
            <div className='chapter-lesson'>
                <video>

                </video>
                <div className='course-chapters-footer'>
                    <Link to=''>Back to Lessons</Link>
                    <div className='arrows'>
                        <Link><i class="far fa-arrow-left"></i></Link>
                        <Link><i class="far fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CourseChapterLessonPage
