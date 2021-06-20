import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import mycourse from '../assets/mycourses.jpg'
import { Link } from 'react-router-dom'
import MyCoursesItem from '../components/Courses/MyCoursesItem'

const MyCoursesPage = () => {
    const myCourses = [
        { id: 1, img: '', courseTitle: 'Corona Renderer for Instructors', nbOfChapters: 12, nbOfLessons: 30, progress: 60, thumbnail: { mycourse } },
        { id: 2, img: '', courseTitle: 'Corona Renderer for Instructors', nbOfChapters: 5, nbOfLessons: 24, progress: 80, thumbnail: { mycourse } },
        { id: 3, img: '', courseTitle: 'Corona Renderer for Instructors', nbOfChapters: 8, nbOfLessons: 18, progress: 10, thumbnail: { mycourse } },
    ]
    return (
        <>
            <Header fullMenu={false} />
            <div className='my-courses-page'>
                <h1>My courses</h1>
                <Link to=''>View Certificates</Link>
                <main>
                    {myCourses.map((course) =>
                        <MyCoursesItem key={course.id} id={course.id} title={course.courseTitle} chapters={course.nbOfChapters} lessons={course.nbOfLessons} progress={course.progress} thumbnail={course.thumbnail} />)}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default MyCoursesPage
