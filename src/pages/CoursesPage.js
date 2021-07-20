import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.jpg'
import CourseItem from '../components/Courses/CourseItem'

const CoursesPage = (props) => {
    console.log(props);
   // const keyword = props.match.params.keyword
    const COURSES = [{
        id: '1',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course1.jpg',
        price: 200,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
    }, {
        id: '2',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.jpg',
        price: 300,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
    }, {
        id: '3',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.jpg',
        price: 400,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
    }, {
        id: '4',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.jpg',
        price: 100,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
    }, {
        id: '5',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.jpg',
        price: 50,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
    }, {
        id: '6',
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        thumbnail: '/src/assets/course2.jpg',
        price: 20,
        chapters:[{number: '01', title:'chapter title',lessons:[{number: '01', title:'lesson title'}]}]
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
                    key={course.id} id={course.id} title={course.title} price={course.price} chapters={course.chapters} lessons={course.chapters.lessons} thumbnail={course1} />
                       )
                        }
                </ul>
            </main>
            <Footer />
        </div>
    )
}

export default CoursesPage
