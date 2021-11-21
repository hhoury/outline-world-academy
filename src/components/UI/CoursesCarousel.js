import React, { useState, useEffect } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import classes from './CoursesCarousel.module.css'
import { useHistory } from 'react-router';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux'
import {listFeaturedCourses} from '../../actions/courseActions'

const CoursesCarousel = (props) => {
    const history = useHistory();
    const [goToSlide, setGoToSlide] = useState(0)
    const [temp, setTemp] = useState([])
    const dispatch = useDispatch()
    const featuredCourseList = useSelector((state) => state.featuredCourseList)
    const { courses } = featuredCourseList
    const featured_courses = courses?.courses
    const mockCourses = [{
        certificates: [],
        chapters: [],
        dateCreated: "2021-11-07T18:41:34.6967556",
        description: "publishing industries for previewing layouts and visual mockups.",
        id: 3,
        key: 3,
        isDeleted: false,
        isFeatured: true,
        lessons: null,
        price: 300,
        thumbnail: "Courses/Thumbnails/1711dc0e-ad78-41dc-af1a-e72479b4f09c_www.jpg",
        thumbnailFile: null,
        title: "Course Featured 3",
        webinars: [],  
    },
{
    certificates: [],
    chapters: [],
    dateCreated: "2021-11-07T18:41:34.6967556",
    description: "publishing industries for previewing layouts and visual mockups.",
    id: 2,
    key: 2,
    isDeleted: false,
    isFeatured: true,
    lessons: null,
    price: 300,
    thumbnail: "Courses/Thumbnails/1711dc0e-ad78-41dc-af1a-e72479b4f09c_www.jpg",
    thumbnailFile: null,
    title: "Course Featured 3",
    webinars: [],
},
{
    certificates: [],
    chapters: [],
    dateCreated: "2021-11-07T18:41:34.6967556",
    description: "publishing industries for previewing layouts and visual mockups.",
    id: 1,
    key: 1,
    isDeleted: false,
    isFeatured: true,
    lessons: null,
    price: 300,
    thumbnail: "Courses/Thumbnails/1711dc0e-ad78-41dc-af1a-e72479b4f09c_www.jpg",
    thumbnailFile: null,
    title: "Course Featured 3",
    webinars: [],
}]
//TODO 
//REPLACE SRC IN CONTENT <img>
    useEffect(() => {
        dispatch(listFeaturedCourses())
        let tempFeatured = []
        if(mockCourses?.length > 0){
            for (let index = 0; index < mockCourses.length; index++) {
                tempFeatured.push({
                    key: mockCourses[index].id,
                    content: <img className={classes.carouselChapter} src="https://picsum.photos/500/800/?random" alt="1" />
                })
            }
        }
        if (tempFeatured.length > 0) {
            setTemp(tempFeatured.map((slide, index) => {
                return { ...slide, onClick: () => setGoToSlide(index) };
            }))
        }
    }, [])
  
 
    const viewCoursesHandler = () => {
        history.push('/courses')
    }
    return (
        <div className={classes.CoursesCarousel}>
            <h1>
                Featured Courses
            </h1>
            <div className={classes.Carousel3D}>
                <Carousel offsetRadius='2' config={config.gentle} showNavigation={false} slides={temp} goToSlide={goToSlide} />
            </div>
            <p className={classes.CarouselText}>
            We provide courses for beginners and professionals. Our courses are tailored to meet your needs.
            </p>
            <Button className={classes.ViewCourses} onClick={viewCoursesHandler}>View Available Courses</Button>
        </div>
    )
}

export default CoursesCarousel
