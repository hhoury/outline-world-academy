import React from 'react'
import classes from './ProfileEditForm.module.css'
import RightMenu from '../Layout/RightMenu'
import Button from '../components/UI/Button'
const ProfileEditForm = (props) => {
    
//   const [user, setUser] = useState([])

//   const EditUserHandler = (uName,uAge) => {
//     setUsersList((prevUser) => {
//       return [...prevUser,{id: Math.random().toString(),name: uName,age: uAge}]
//     });
//   }
    const user = {
        name: 'Mohanad',
        email: 'mohannad@gmail.com',
        job: 'developer',
        password: '123456',
        image: '../assets/profile.png'
    }
    return (
        <div className={`${classes.ProfileEdit}`}>
            <div className={classes.top}>
                <p> Hello, {user.name}</p>
                <RightMenu />
            </div>
            <form>
                <figure>
                    <img src={user.image} alt='profile' />
                </figure>
              
                <span><input type='text' name='txtName' value={user.name} /></span>
                <span><input type='text' name='txtName' value={user.email} /></span>
                <span><input type='text' name='txtName' value={user.job} /></span>
                <span><input type='password' name='txtName' value={user.password} /></span>
                <Button className={classes.btn}>EDIT PROFILE</Button>
            </form>
        </div>
    )
}

export default ProfileEditForm
