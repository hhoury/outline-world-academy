import React, { useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import classes from './CoursesCarousel.module.css'
import { useHistory } from 'react-router';
import Button from './Button';
const CoursesCarousel = (props) => {
    const history = useHistory();
    const [goToSlide, setGoToSlide] = useState(0)
    const slides = [
        {
            key: 1,
            content: <img className={classes.carouselChapter} src="https://picsum.photos/500/800/?random" alt="1" />
        },
        {
            key: 2,
            content:   <img className={classes.carouselChapter} src="https://picsum.photos/500/800/?random" alt="2" />
        },
        {
            key: 3,
            content: <img className={classes.carouselChapter} src="https://picsum.photos/500/800/?random" alt="3" />
        }
    ].map((slide, index) => {
        return { ...slide, onClick: () => setGoToSlide(index) };
    });
    const viewCoursesHandler = () => {
        history.push('/courses')
    }
    return (
        <div className={classes.CoursesCarousel}>
            <h1>
                Featured Courses
            </h1>
            <div className={classes.Carousel3D}>
                <Carousel offsetRadius='2' config={config.gentle} showNavigation={false} slides={slides} goToSlide={goToSlide} />
            </div>
            <p className={classes.CarouselText}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
            </p>
            <Button className={classes.ViewCourses} onClick={viewCoursesHandler}>View Available Courses</Button>


        </div>

    )
}

export default CoursesCarousel
