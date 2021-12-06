import React, {useEffect, useState} from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import CourseChapterDetails from '../components/Courses/CourseChapterDetails'
import { ProgressBar } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { listCourseDetails } from '../actions/courseActions'

const ChapterDetailsPage = (props) => {
    
    
    const {id,chid} = useParams()
    const dispatch = useDispatch()
    const [currChapter, setCurrChapter] = useState()
    const courseDetails = useSelector((state) => state.courseDetails)
    const course = courseDetails.course.coures_details
    const chapter = course?.chapters.find(x => x.id == chid)
   console.log(chapter);
   console.log(course);


    useEffect(() => {
        dispatch(listCourseDetails(id))
        setCurrChapter(chapter)
    }, [id,chid])

    const history = useHistory();

    const goBackToChaptersHandler = () => {
        history.push(`/my-courses/${course.course_id}`)
    }

    const prevChapterHandler = () => {
        console.log(course);
        const currIndex = course.chapters.findIndex(x => x.id == currChapter.id)
        if(course.chapters[0]?.id == currChapter.id)
        return;
        else{
            history.push(`/courses/${course?.course_id}/chapter/${course?.chapters[currIndex - 1]?.id}`)
        }
        
        // if(course[0]?.id == currChapter.id)
        // return;
        // else{
        //     setCurrChapter(course[currChapter + 1])
        // }
        // console.log(currChapter);
        // console.log(course);
    }

    const nextChapterHandler = () => {
        console.log(course);
        const currIndex = course.chapters.findIndex(x => x.id == currChapter.id)
        if(course.chapters[course.chapters.length - 1]?.id == currChapter.id)
        return;
        else{
            history.push(`/courses/${course?.course_id}/chapter/${course?.chapters[currIndex + 1]?.id}`)
        }
    }

    return (
        <div className='enrolled-course-details' >
            <Header fullMenu={false} withName={true}    />

            <h1>{course?.title}</h1>
            <div className='course-chapters'>
                <div className='course-chapters-header'>
                    <h1>Chapter {currChapter?.id} {currChapter?.title}</h1>
                    <div className='chapter-progress'>
                        <p>% {currChapter?.progress ? currChapter?.progress : 0} Complete</p>
                        <ProgressBar now={currChapter?.progress} />
                    </div>
                </div>
                <ul>
                    {currChapter?.lessons?.map((lesson,index) =>
                        <CourseChapterDetails
                            courseId={course?.course_id}
                            chapterId={currChapter.id}
                            key={index}
                            id={index}
                            number={lesson.display_order}
                            title={lesson.title}
                            thumbnail={lesson.thumbnail}
                            description={lesson.description}
                            progress={lesson.progress} />)}
                </ul>
                <div className='course-chapters-footer'>
                    <button onClick={goBackToChaptersHandler} className='goBackButton'>Back to Chapters</button>

                    <div className='arrows'>
                        <button onClick={prevChapterHandler}><i className="far fa-arrow-left"></i></button>
                        <button onClick={nextChapterHandler}><i className="far fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChapterDetailsPage
