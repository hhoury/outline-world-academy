import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.png'
import CourseItem from '../components/Courses/CourseItem'
const CoursesPage = () => {
    const COURSES = [{
        id: '1',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course1.png'
    }, {
        id: '2',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.png'
    }, {
        id: '3',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.png'
    }, {
        id: '4',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.png'
    }, {
        id: '5',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.png'
    }
    ]
    return (
        <div className='courses-page'>
            <Header fullMenu={true}/>
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat
            </h1>
            <main>
                <h1>Courses</h1>
                <ul className='row'>
                    {COURSES.map((course) =>
                    <CourseItem 
                    key={course.id} id={course.id} title={course.title} thumbnail={course1} />
                       )
                        }
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default CoursesPage
