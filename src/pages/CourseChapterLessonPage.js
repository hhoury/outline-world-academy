import React, {useEffect} from 'react'
import {listCourseDetails} from '../actions/courseActions'
import {listCourseChapterDetails} from '../actions/chapterActions'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link, useHistory } from 'react-router-dom'
import video from '../assets/video.mp4'
import video1 from '../assets/video1.ogg'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

const CourseChapterLessonPage = () => {

    const dispatch = useDispatch()
    const {id,chid,lid} = useParams()
    const history = useHistory();

    const courseDetails = useSelector((state) => state.courseDetails)
    const course = courseDetails.course.coures_details

    const courseChapters = useSelector((state) => state.courseChapters)
    const chapter = courseChapters?.chapter?.chapter_with_lessons
 
    const lesson = chapter?.lessons?.find(x=> x.id == lid)
 
    const goBackToLessonHandler = () => {
        history.goBack();
    }
    useEffect(() => {
        dispatch(listCourseDetails(id))
        dispatch(listCourseChapterDetails(chid))
    }, [id])

    return (
        <div className='course-details' >
            <Header fullMenu={false} withName={true}/>
            <h1>{course?.title}</h1>
            <div className='chapter-lesson'>
                <h2>Chapter {chapter?.id} <br/> {chapter?.title}</h2>
                <p>{lesson?.id} {lesson?.title}</p>
               <div className='lesson-video'>
               <video controls>
                    <source src={lesson?.video} type="video/mp4" />
                    <source src={lesson?.video} type="video/ogg" />
                    Your browser does not support the video.
                </video>
                <div className='chapter-lesson-footer'>
                    <button onClick={goBackToLessonHandler} className='goBackButton'>Back to Lessons</button>
                    <div className='arrows'>
                        <Link to=''><i className="far fa-arrow-left"></i></Link>
                        <Link to=''><i className="far fa-arrow-right"></i></Link>
                    </div>
                </div>
               </div>
            </div>
            <Footer />
        </div>
    )
}

export default CourseChapterLessonPage
