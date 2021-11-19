import classes from './SocialMedia.module.css'
import React from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login'
import { useSelector } from 'react-redux'

const SocialMedia = (props) => {
    const userLogin = useSelector((state) => state.userLogin)
    const {userInfo } = userLogin
    if(userInfo)
        window.location.href= '/our-world'
    const responseGoogle = (response) => {
    }
    const responseFacebook = (response) => {
    }

    return (
        <div className={`${classes['social-media']} ${props.className}`}>
            <h1>Connect with</h1>
            <div className={classes['icons-group']}>
                <GoogleLogin
                    clientId="454700765946-33hpa1noi4637t65b8caqigrfmlaicvj.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps =>
                        (<button onClick={renderProps.onClick}><i className="fab fa-google"></i></button>)}
                />
                <FacebookLogin
                    appId="349193443546719"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    icon="fab fa-facebook-f"
                    
                    // render={renderProps => (<button><i className="fab fa-facebook-f"></i></button>)}
                />
            </div>
        </div>  
    )
}

export default SocialMedia
