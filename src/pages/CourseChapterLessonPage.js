import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'
import video from '../assets/video.mp4'
import video1 from '../assets/video.mp4'

const CourseChapterLessonPage = () => {
    const course = { id: 1, title: 'corona renderer' }
    const chapter = { id: 1, number: '01.', title: 'Lorem Ipsum Dolor' }
    const lesson = { id: 1, title: 'Lorem Ipsum Dolor', number: '1.3' }


    return (
        <div className='course-details' >
            <Header fullMenu={false} />
            <h1>{course.title}</h1>

            <div className='chapter-lesson'>
                <h2>Chapter {chapter.number} <br/> {chapter.title}</h2>
                <p>{lesson.number} {lesson.title}</p>
               <div className='lesson-video'>
               <video controls>
                    <source src={video} type="video/mp4" />
                    <source src={video1} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
                <div className='chapter-lesson-footer'>
                    <Link to=''>Back to Lessons</Link>
                    <div className='arrows'>
                        <Link><i class="far fa-arrow-left"></i></Link>
                        <Link><i class="far fa-arrow-right"></i></Link>
                    </div>
                </div>
               </div>
               
            </div>
            <Footer />
        </div>
    )
}

export default CourseChapterLessonPage
