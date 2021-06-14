import React,{useState} from 'react'
import Button from './Button'
import classes from './PasswordModal.module.css'
import {Link} from 'react-router-dom'
const PasswordModal = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const showPasswordHandler = (event) => {
        event.preventDefault();
        setPasswordShown(!passwordShown);
    }
    return (
        <div className={classes.PasswordModal}>
            <h1>insert current password</h1>
            <p>current password is required to submit changes</p>
            <div style={{ position: 'relative' }}>
                    <input name='passwordTextbox' type={!passwordShown ? 'password' : 'text'} placeholder='Create Password' />
                    <button type="button" className={classes.toggle} style={!passwordShown ? { color: '#fff', transition: 'all 0.3s ease-out' } : { color: '#F44E0C', transition: 'all 0.3s ease-out' }} onClick={showPasswordHandler}>
                        <i className="fal fa-eye"></i>
                    </button>
                </div>
            <Button>SUBMIT</Button>
            <Link to=''>Forgot password?</Link>
        </div>
    )
}

export default PasswordModal
