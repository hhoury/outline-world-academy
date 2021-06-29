import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CourseChapterDetails from '../components/Courses/CourseChapterDetails'
import { ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ChapterDetailsPage = () => {

    const course = { id: 1, title: 'corona renderer' }
    const chapter = {
        id: 1, title: 'Lorem Ipsum Dolor', progress: 60, number: '01.',
        lessons: [
            { number: '1.1', title: 'lorem ipsum dolor lesson', progress: 100 },
            { number: '1.2', title: 'lorem ipsum dolor lesson', progress: 100 },
            { number: '1.3', title: 'lorem ipsum dolor lesson', progress: 20 }
        ]
    }

    return (
        <div className='course-details' >
            <Header fullMenu={false} />

            <h1>{course.title}</h1>


            <div className='course-chapters'>
                <div className='course-chapters-header'>
                    <h1>Chapter {chapter.number} {chapter.title}</h1>
                    <div className='chapter-progress'>
                        <p>%{chapter.progress} Complete</p>
                        <ProgressBar now={chapter.progress} />
                    </div>
                </div>
                <ul>
                    {chapter.lessons.map((lesson) =>
                        <CourseChapterDetails key={lesson.number}
                            number={lesson.number}
                            title={lesson.title}
                            thumbnail={lesson.thumbnail}
                            description={lesson.description}
                            progress={lesson.progress} />)}
                </ul>
                <div className='course-chapters-footer'>
                    <Link to=''>Back to Chapters</Link>
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

export default ChapterDetailsPage
