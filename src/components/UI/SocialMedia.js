import classes from './SocialMedia.module.css'
import React from 'react'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const SocialMedia = (props) => {

    const responseGoogle = (response) => {
        console.log(response);
    }
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <div className={`${classes['social-media']} ${props.className}`}>
            <h1>Connect with</h1>
            <div className={classes['icons-group']}>
                <GoogleLogin
                    clientId=""
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps =>
                        (<button onClick={renderProps.onClick}><i className="fab fa-google"></i></button>)}
                />
                <FacebookLogin
                    appId=""
                    callback={responseFacebook}
                    render={renderProps => (<button><i className="fab fa-facebook-f"></i></button>)}
                />
            </div>
        </div>
    )
}

export default SocialMedia
