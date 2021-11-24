    import React, { useState, useEffect } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import classes from './CourseContent.module.css'
import chap from '../../assets/chapter1.jpg'

const CourseContent = (props) => {

    const [chapterNb, setchapterNb] = useState(0)
    const [goToChapter, setGoToChapter] = useState(0)
    const [temp, setTemp] = useState([])
    useEffect(() => {
        let tempLocal = []
        if (props.chapters.length > 0) {
            for (let index = 0; index < props.chapters.length; index++) {
                tempLocal.push({
                    key: props.chapters[index].id,
                    content:
                        <div className={classes.chapter}>
                            <div>
                                <h2>{props.chapters[index].title}</h2>
                                <img src={props.chapters[index].thumbnail} alt="1" />
                                <p>
                                    {props.chapters[index].description}
                                </p>
                            </div>
                            <div className={classes.lessons}>
                                <ul>
                                    {
                                        props.chapters[index].lessons.map((lesson, index) =>
                                            <li key={index}>
                                                <span><i className="fas fa-tv"></i></span>
                                                <p>{lesson?.title}</p>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                })
            }
            if (tempLocal.length > 0) {
                setTemp(tempLocal.map((chapter, index) => {
                    return { ...chapter, onClick: () => { chapterHandler(index); setchapterNb(index) } };
                }))
            }
        }
    }, [props.chapters])

    const chapterHandler = (index) => {
        setGoToChapter(index)
    }
    const prevHandler = () => {
        if (chapterNb === 0) {
            setchapterNb(temp.length - 1);
        }
        else {
            setchapterNb(chapterNb - 1);
        }
    }
    const nextHandler = () => {
        if (chapterNb === temp.length - 1) {
            setchapterNb(0);
        }
        else {
            setchapterNb(chapterNb + 1);
        }
    }
    useEffect(() => {
        setGoToChapter(chapterNb)
    }, [chapterNb])

    return (
        <div className={classes.CourseContent}>
            <button className={classes.prev} onClick={prevHandler}>
                <i className="far fa-arrow-left"></i>
            </button>
            <button className={classes.next} onClick={nextHandler}>
                <i className="far fa-arrow-right"></i>
            </button>
            <h2>COURSE CONTENT</h2>
            <div className={classes.Carousel3D}>
                <Carousel offsetRadius='2'
                    config={config.gentle}
                    showNavigation={false}
                    slides={temp}
                    goToSlide={goToChapter} />
            </div>
        </div>
    )
}

export default CourseContent
