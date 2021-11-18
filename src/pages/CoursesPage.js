import React, { useEffect } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import course1 from '../assets/course1.jpg'
import CourseItem from '../components/Courses/CourseItem'
import { listCourses } from '../actions/courseActions'
import { useDispatch, useSelector } from 'react-redux'
import { GridLoader } from 'react-spinners'
import Message from '../components/UI/Message'
import { css } from "@emotion/react";
import { useLocation } from 'react-router-dom'
import { listCourseChapters } from '../actions/chapterActions'
import { registeredListCourses } from '../actions/registeredCourseActions'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  text-align: center;
  color: #F44E0C;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const CoursesPage = (props) => {
    let query = useQuery();
    const search = query.get('search');
    const dispatch = useDispatch()
    const courseList = useSelector((state) => state.courseList)
    const StudentId = JSON.parse(localStorage.getItem('userInfo'))?.id
    const enrollmentsList = useSelector((state) => state.enrollmentsList)
    let { data } = enrollmentsList
    const registeredCourses = data?.courses
    let registeredCoursesItemsIds = []
    registeredCourses?.forEach(element => {
        registeredCoursesItemsIds.push(element.item1.id)
    });
    useEffect(() => {
        dispatch(listCourses())
        if (StudentId)
        {
             dispatch(registeredListCourses(StudentId))
        }
    }, [dispatch, search])
    
    let { loading, error, courses } = courseList
    if (search) {
        courses = courses.filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
    }
    return (
        <div className='courses-page'>
            <Header fullMenu={true} />
            <h1> Outline World Academy was born after 8 years of hard work, dedication, and commitment from every one of our members. We have created this academy to spread our knowledge and experience among all people in the 3D World and we hope that our Academy is the first step in the professional visualization world.
            </h1>
            <main>
                <h1>Courses</h1>
                {loading ? <GridLoader color='#F44E0C' css={override} size='30px' /> : error ? <Message message={error} /> :
                    <ul className='row'>
                        {
                            courses.length > 0 ?
                                (
                                    courses.map((course) =>

                                        <CourseItem 
                                            key={course.id} 
                                            isEnrolled={registeredCoursesItemsIds.includes(course.id)}
                                            id={course.id} 
                                            title={course.title} 
                                            price={course.price} 
                                            chapters={course.chapters} 
                                            lessons={course.chapters.lessons} 
                                            thumbnail={course1} />
                                    )
                                )
                                :

                                <h1>NO Courses Found!</h1>
                        }
                    </ul>
                }
            </main>
            <Footer />
        </div>
    )
}

export default CoursesPage
