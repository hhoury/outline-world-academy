import React from 'react'
import classes from './OurWork.module.css'
import work1 from '../../assets/Work 1.png'
import work2 from '../../assets/Work 2.png'
import work3 from '../../assets/Work 3.png'
import work4 from '../../assets/Work 4.png'
import work5 from '../../assets/Work 5.png'
import work6 from '../../assets/Work 6.png'
import work7 from '../../assets/Work 7.png'
const OurWork = () => {
    return (
        <>
            <div className={classes.OurWork}>
                <h2>Our Work</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className={classes.Gallery}>
                <div className={classes.horizontal}>
                    <div className={classes.vertical}>
                        <div className={classes.horizontal}>
                            <div><img src={work1} alt={work1.toString()} /></div>
                            <div><img src={work2} alt={work2.toString()} /></div>
                        </div>
                        <div><img src={work3} alt={work3.toString()} /></div>
                    </div>
                    <div><img src={work4} alt={work4.toString()} /></div>
                </div>
                <div>
                    <ul className={classes.horizontal}>
                        <li><img src={work5} alt={work5.toString()} /></li>
                        <li><img src={work6} alt={work6.toString()} /></li>
                        <li><img src={work7} alt={work7.toString()} /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default OurWork
