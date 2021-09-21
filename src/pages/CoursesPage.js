import React, {useEffect, useState} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.jpg'
import CourseItem from '../components/Courses/CourseItem'
import axios from 'axios'

const CoursesPage =  (props) => {
   // const keyword = props.match.params.keyword
   const [courses, setCourses] = useState([])
   useEffect(() => {
       axios.get('https://localhost:44362/api/courses')
       .then(res => {
         const COURSES = res.data;
         setCourses(COURSES)
      });
   }, [])
    return (
        <div className='courses-page'>
            <Header fullMenu={true}/>
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat
            </h1>
            <main>
                <h1>Courses</h1>
                <ul className='row'>
                    {courses.map((course) =>
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
