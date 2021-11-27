import React, { useState, useEffect } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link, useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { VideoPlayer } from '../components/UI/VideoPlayer'
import { Button } from 'react-bootstrap'
import { listCourseDetails } from '../actions/courseActions'
import { listCourseChapterDetails } from '../actions/chapterActions'

const CourseChapterLessonPage = () => {
  const dispatch = useDispatch()
  const { id, chid, lid } = useParams()
  const history = useHistory();
  const course = { id: 1, title: 'corona renderer' }
  const chapter = { id: 1, number: '01.', title: 'Lorem Ipsum Dolor' }
  const lesson = { id: 1, title: 'Lorem Ipsum Dolor', number: '1.3' }
  const [lessonVideo, setLessonVideo] = useState("https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8");
  const [lesson_poster, setLessonPoster] = useState("https://www.online-image-editor.com/styles/2019/images/power_girl.png")
  const [reload, setReload] = useState(0);
  const goNext = () => {
  }

  const goBackToLessonHandler = () => {
    history.goBack();
    console.log({ reload })
    setReload(reload + 1);
    if (lessonVideo == "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8") {
      console.log(1)
      setLessonVideo("https://outlineworldacademy.s3.ap-south-1.amazonaws.com/test/index.m3u8");
    }
    else {
      console.log(2)
      setLessonVideo("https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8");
    }
  }
  // const courseDetails = useSelector((state) => state.courseDetails)
  // const course = courseDetails.course.coures_details

  // const courseChapters = useSelector((state) => state.courseChapters)
  // const chapter = courseChapters?.chapter?.chapter_with_lessons

  // // eslint-disable-next-line eqeqeq
  // const lesson = chapter?.lessons?.find(x => x.id == lid)

  // const [lessonVideo, setLessonVideo] = useState(lesson?.video);
  // const [lesson_poster, setLessonPoster] = useState("https://www.online-image-editor.com/styles/2019/images/power_girl.png")
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
  console.log(initialOptions)


  return (
    <div className='course-details' >
      <Header fullMenu={false} withName={true} />
      <h1>{course.title}</h1>
      <div className='chapter-lesson'>
        <h2>Chapter {chapter.number} <br /> {chapter.title}</h2>
        <p>{lesson.number} {lesson.title} {lessonVideo}</p>
        <div className='lesson-video'>
          <div>{reload}</div>
          <VideoPlayer key={reload} src={lessonVideo} poster={lesson_poster} />
          <div className='chapter-lesson-footer'>
            <button onClick={goBackToLessonHandler} className='goBackButton'>Back to Lessons</button>
            <div className='arrows'>
              <Link to=''><i className="far fa-arrow-left"></i></Link>
              <Button onClick={(goBackToLessonHandler)}><i className="far fa-arrow-right"></i></Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CourseChapterLessonPage
