import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import thumbnail from '../assets/chapter-thumbnail.jpg'
import CourseChapters from '../components/Courses/CourseChapters'
const CourseDetailsPage = (props) => {
    const course = {
        id: 1,
        title: 'Corona renderer for instructors',
        chapters: [{ number: '01', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }, { number: '02', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }, { number: '03', title: 'Lorem Ipsum', thumbnail: { thumbnail }, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem erat, convallis eu interdum eget, blandit vel metus. Mauris quis enim consectetur, vehicula urna id, sodales odio. Maecenas feugiat dignissim eros, at commodo quam gravida non. Morbi non lobortis sem, in porta nulla. Vestibulum pellentesque sem at libero accumsan, eu consequat tellus tristique. ' }],
    }
    return (
        <div className='course-details' >
            <Header fullMenu={false} />
            <h1>{course.title}
            </h1>
            <div className='course-chapters'>
               
                    <h2>Course Chapters</h2>

                <ul>
                    {course.chapters.map((chapter) =>
                        <CourseChapters key={chapter.number} id={chapter.number} courseId={course.id} number={chapter.number} title={chapter.title} thumbnail={chapter.thumbnail} description={chapter.description} />)}
                </ul>

            </div>
            <Footer />
        </div>
    )
}

export default CourseDetailsPage
