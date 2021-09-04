import React from 'react'
import classes from './TrainingCenter.module.css'
import corona from '../../assets/Corona_ATC_SOA.png'
const TrainingCenter = () => {
    return (
        <div className={classes.TrainingCenter}>
            <p>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscin
            </p>
            <div>
                <img src={corona} alt='corona'/>
            </div>
        </div>
    )
}

export default TrainingCenter
