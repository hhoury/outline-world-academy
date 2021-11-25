import React, { useEffect, useState } from 'react'
import { listCourseDetails } from '../actions/courseActions'
import { listCourseChapterDetails } from '../actions/chapterActions'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link, useHistory } from 'react-router-dom'
import video from '../assets/video.mp4'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { VideoPlayer } from '../components/UI/VideoPlayer'

const CourseChapterLessonPage = () => {
  const dispatch = useDispatch()
  const { id, chid, lid } = useParams()
  const history = useHistory();
  const [reload, setReload] = useState(0);
  const courseDetails = useSelector((state) => state.courseDetails)
  const course = courseDetails.course.coures_details

  const courseChapters = useSelector((state) => state.courseChapters)
  const chapter = courseChapters?.chapter?.chapter_with_lessons

  // eslint-disable-next-line eqeqeq
  const lesson = chapter?.lessons?.find(x => x.id == lid)

  console.log(lesson);
  const [lessonVideo, setLessonVideo] = useState(lesson?.video);
  const [lesson_poster, setLessonPoster] = useState("https://www.online-image-editor.com/styles/2019/images/power_girl.png")

  var sources1 = [
    {
      src: { lessonVideo },
      type: 'application/x-mpegURL'
    },

  ];
  const initialOptions = {
    fluid: true,
    autoplay: true,
    controls: true,
    userActions: { hotkeys: true },
    controlBar: {
      'pictureInPictureToggle': false
    },
    sources: sources1,
    poster: { lesson_poster },
    plugins: {
      qualityLevels: {},
      hlsQualitySelector: {},
      seekButtons: {
        forward: 10,
        back: 10
      },
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }


  const goBackToLessonHandler = () => {
    history.goBack();
  }
  useEffect(() => {
    dispatch(listCourseDetails(id))
    dispatch(listCourseChapterDetails(chid))
  }, [id])

  return (
    <div className='course-details' >
      <Header fullMenu={false} withName={true} />
      <h1>{course?.title}</h1>
      <div className='chapter-lesson'>
        <h2>Chapter {chapter?.id} <br /> {chapter?.title}</h2>
        <p>{lesson?.id} {lesson?.title}</p>
        <div className='lesson-video'>
          {/* <div>{reload}</div> */}
          <VideoPlayer key={reload} src={video} poster={lesson_poster} />
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
