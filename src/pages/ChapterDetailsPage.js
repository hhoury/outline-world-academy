import React, {useEffect} from 'react'
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

    const courseDetails = useSelector((state) => state.courseDetails)
    const course = courseDetails.course.coures_details
    const chapter = course?.chapters.find(x => x.id == chid)

    useEffect(() => {
        dispatch(listCourseDetails(id))
    }, [])

    const history = useHistory();
    const goBackToChaptersHandler = () => {
        history.goBack();
    }

    return (
        <div className='enrolled-course-details' >
            <Header fullMenu={false} withName={true}    />

            <h1>{course?.title}</h1>
            <div className='course-chapters'>
                <div className='course-chapters-header'>
                    <h1>Chapter {chapter?.id} {chapter?.title}</h1>
                    <div className='chapter-progress'>
                        <p>%{chapter?.progress} Complete</p>
                        <ProgressBar now={chapter?.progress} />
                    </div>
                </div>
                <ul>
                    {chapter?.lessons?.map((lesson,index) =>
                        <CourseChapterDetails
                            courseId={course?.course_id}
                            chapterId={chapter.id}
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
                        <Link to=''><i className="far fa-arrow-left"></i></Link>
                        <Link to=''><i className="far fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ChapterDetailsPage
