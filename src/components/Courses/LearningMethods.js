import React from 'react'
import classes from './LearningMethods.module.css'
import cross from '../../assets/cross.svg'
import bg from '../../assets/methodsBG.png'
const LearningMethods = () => {
    return (
        <div style={{width:' 100%',backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat'}}>
 <div className={classes.LearningMethods}>
            <h2>Learning Methods</h2>
            <div className={classes.methods}>
                <div>
                    <h3>Pre-recorded Videos</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

                    </p>
                </div>
                <span><img src={cross} alt='plus' /></span>
                <div>
                    <h3>Live webinars with OWA instructors</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
                </div>
            </div>
        </div>
    
        </div>
       
    )
}

export default LearningMethods
