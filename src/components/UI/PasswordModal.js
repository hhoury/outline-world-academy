import React, {useState} from 'react'
import Button from './Button'
import classes from './PasswordModal.module.css'
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom'
const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className={classes.backdrop}></div>
    )
}
const ModalOverlay = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    const forgotPasswordHandler = () => {
        
    }
    return(
        <div className={classes.PasswordModal}>
            <h1>insert current password</h1>
            <p>current password is required to submit changes</p>
            <div style={{ position: 'relative' }}>
                    <input name='passwordTextbox' 
                        type={!passwordShown ? 'password' : 'text'} placeholder='Password' />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
            <Button className={classes.btn}>SUBMIT</Button>
            <Link onClick={forgotPasswordHandler} to='/password-reset'>Forgot password?</Link>
        </div>
    )
}
const PasswordModal = (props) => {
   const portalElement = document.getElementById('overlays')
    return (
        <>
         {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
         {ReactDOM.createPortal(<ModalOverlay  />, portalElement)}
        </>
        
    )
}

export default PasswordModal
