import React, { useState, useEffect } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import classes from './CourseContent.module.css'
import chap1 from '../../assets/chapter.jpg' 
import chap from '../../assets/chapter1.jpg' 

const CourseContent = (props) => {

    const [chapterNb, setchapterNb] = useState(0)
    const [goToChapter, setGoToChapter] = useState(0)
    const [temp, setTemp] = useState([{}])
   
    useEffect(() => {
        let tempLocal = [{}]
    for (let index = 0; index < props.chapters.length; index++) {
        tempLocal.push({
            key: props.chapters[index].id,
            content:
                <div className={classes.chapter} onClick={() => { chapterHandler(index); setchapterNb(index) }}>
                    <div>
                        <h2>{props.chapters[index].title}</h2>
                        <img src={chap} alt="1" />
                        <p>
                            {props.chapters[index].description}
                        </p>
                    </div>
                    <div className={classes.lessons}>

                        <ul>
                            {
                                props.chapters[index].lessons.map(lesson =>
                                    <li key={lesson.id}>
                                        <span><i className="fas fa-tv"></i></span>
                                        <p>{lesson?.title}</p>
                                    </li>)
                            }
                        </ul>
                    </div>
                </div>
        })
    }
    /* tempLocal = tempLocal?.map((chapter, index) => {
        return { ...chapter, onClick: () => { chapterHandler(index); setchapterNb(index) } };
    }); */
    setTemp(tempLocal)
    }, [])
    //#region commented
    // const chapters = [
    //     {
    //         key: 1,
    //         content:
    //             <div className={classes.chapter}>
    //                 <div>
    //                     <h2>Chapter 1</h2>
    //                     <img src="https://picsum.photos/650/800/?random" alt="1" />
    //                     <p>
    //                         Lorem ipsum dolor sit amet,
    //                         consectetuer adipiscin
    //                     </p>
    //                 </div>
    //                 <div className={classes.lessons}>
    //                     <ul>
    //                         <li>
    //                             <span><i className="fas fa-tv"></i></span>
    //                             <p>1.1 Lorem ipsum dolor sit amet, consecte</p>
    //                         </li>
    //                         <li>
    //                             <span><i className="fas fa-tv"></i></span>
    //                             <p>1.2 Lorem ipsum dolor sit amet, consecte</p>
    //                         </li>
    //                         <li>
    //                             <span><i className="fas fa-tv"></i></span>
    //                             <p>1.3 Lorem ipsum dolor sit amet, consecte</p>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //     },
    //     {
    //         key: 2,
    //         content: <div className={classes.chapter}>
    //             <div>
    //                 <h2>Chapter 2</h2>
    //                 <img src="https://picsum.photos/650/800/?random" alt="1" />
    //                 <p>
    //                     Lorem ipsum dolor sit amet,
    //                     consectetuer adipiscin
    //                 </p>
    //             </div>
    //             <div className={classes.lessons}>
    //                 <ul>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.1 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.2 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.3 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     },
    //     {
    //         key: 3,
    //         content: <div className={classes.chapter}>
    //             <div>
    //                 <h2>Chapter 3</h2>
    //                 <img src="https://picsum.photos/650/800/?random" alt="1" />
    //                 <p>
    //                     Lorem ipsum dolor sit amet,
    //                     consectetuer adipiscin
    //                 </p>
    //             </div>
    //             <div className={classes.lessons}>
    //                 <ul>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.1 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.2 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                     <li>
    //                         <span><i className="fas fa-tv"></i></span>
    //                         <p>1.3 Lorem ipsum dolor sit amet, consecte</p>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     }
    // ].map((chapter, index) => {
    //     return { ...chapter, onClick: () => { chapterHandler(index); setchapterNb(index) } };
    // });
   //#endregion
    
  
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
