import React, { useEffect} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import mycourse from '../assets/mycourses.jpg'
import { Link } from 'react-router-dom'
import MyCoursesItem from '../components/Courses/MyCoursesItem'
import { registeredListCourses } from '../actions/registeredCourseActions'
import { useDispatch, useSelector } from 'react-redux'
import { GridLoader } from 'react-spinners'
import { css } from "@emotion/react";
import Message from '../components/UI/Message'
import {useHistory} from 'react-router'
import { Button } from 'react-bootstrap'
import Cookies from 'js-cookie'
const MyCoursesPage = () => {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
  color: #F44E0C;
`;
const history = useHistory();
 const checkCoursesHandler = (e) => {
     e.preventDefault();
     history.push('/courses')
 }
 const token = Cookies.get('accessToken')
    // const StudentId = JSON.parse(localStorage.getItem('userInfo'))?.id
    const dispatch = useDispatch()
    useEffect(() => {
        if(token)
            dispatch(registeredListCourses(token))
    }, [])
    const enrollmentsList = useSelector((state) => state.enrollmentsList)
    let { loading, error, data } = enrollmentsList
    const courses = data?.courses
    return (
        <>
            <Header fullMenu={false} withName={true}/>
            <div className='my-courses-page'>
                {courses?.length > 0 && <h1>My courses</h1>}
                {courses?.length > 0 && <Link to=''>View Certificates</Link>}
                <main>
                    {
                        courses?.length > 0 ? (
                        loading ? <GridLoader color='#F44E0C' css={override} size='30px' /> : error ? <Message message={error} /> :
                            courses?.map((course) =>
                                <MyCoursesItem key={course.item1.id} id={course.item1.id} title={course.item1.title} chapters={course.item1.chapters.length} lessons={course.item2} progress={course.progress} thumbnail={course.item1.thumbnail} />))
                                :
                                ( <div className='empty-cart'>
                                <h3>You are not Enrolled in any course</h3>
                                <div>
                                    <p>Check Our Courses to Find a Course For You</p>
                                    <Button className='check-courses' onClick={checkCoursesHandler}>
                                        Check Our Courses
                                    </Button>
                                </div>
                            </div>)
                    }
                </main>
            </div>
            <Footer />
        </>
    )
}

export default MyCoursesPage
