import React, { useEffect, useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.jpg'
import CourseItem from '../components/Courses/CourseItem'
import {listCourses} from '../actions/courseActions'
import { useDispatch, useSelector } from 'react-redux'
import { GridLoader } from 'react-spinners'
import Message from '../components/UI/Message'
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
  color: #F44E0C;
`;
const CoursesPage = (props) => {
    // const keyword = props.match.params.keyword
    // const [courses, setCourses] = useState([])
    const dispatch = useDispatch()
    const courseList = useSelector((state) => state.courseList)
    useEffect(() => {
        dispatch(listCourses())
    }, [dispatch])
    const { loading, error, courses } = courseList
    return (
        <div className='courses-page'>
            <Header fullMenu={true} />
            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat
            </h1>
            <main>
                <h1>Courses</h1>
                {loading ? <GridLoader color='#F44E0C' css={override}  size='30px' /> : error ? <Message message={error} /> :
                <ul className='row'>
                    {courses.map((course) =>
                        <CourseItem
                            key={course.id} id={course.id} title={course.title} price={course.price} chapters={course.chapters} lessons={course.chapters.lessons} thumbnail={course1} />
                    )
                    }
                </ul>
                  }
            </main>
            <Footer />
        </div>
    )
}

export default CoursesPage
