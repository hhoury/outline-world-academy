import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.png'
import {Link} from 'react-router-dom'
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
            <Header />
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat
            </h1>
            <main>
                <h1>Courses</h1>
                <ul className='row'>
                    {COURSES.map((course) =>
                        <li key={course.id} className='col-lg-6 col-md-6 col-sm-12 course-item'>
                            <figure>
                                <img src={course1} alt={course.title} />
                            </figure>
                            <h1>{course.title}</h1>
                            <Link to={`/courses/${course.id}`}>View Course Details</Link>
                        </li>)}
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default CoursesPage
