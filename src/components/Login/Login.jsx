import {useState,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import './Login.css'
import userContext from '../../context/userContext'

const LoginForm = ()=>{
const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [showError, setshowError] = useState(false)
const {user, setuser} = useContext(userContext);
const navigate = useNavigate()


 

const handleChangeEmail = e =>{
    setemail(e.target.value)
}

const handleChangePassword = e=> {
  setpassword(e.target.value)
}

const handleError = ()=>{
    setshowError(true)
    setTimeout(() => {
        setshowError(false) 
    }, 4000);
}

const loginOk = user =>{
    setuser(user)
    setemail('')
    setpassword('')
    window.localStorage.setItem('token',user.token)
    window.localStorage.setItem('username',user.email)
    navigate('/')
}

const submitLogin = async e=>{
e.preventDefault()
try {
    const req = await axios.post(PATH+'/users/login',{
        email,
        password
    })

    if(req.data){
        loginOk(req.data)
    }

} catch (error) {
    handleError()
}}


    return (  

    <>
        <div className="container">
            <form className="login-form" onSubmit={submitLogin}>
                <h3>Login Form</h3>
                <div className="user-form">
                <i className="far fa-envelope"></i>
                <input type={'email'} placeholder="Email" onChange={handleChangeEmail} value={email}></input>
                </div>
                <div className="user-form">
                <i className="fas fa-key"></i>
                <input type="password" placeholder="Password" onChange={handleChangePassword} value={password}></input>
                </div>
                <button className="btn login">Login</button>
                <button className="btn create-user" onClick={()=>navigate('/signup')}>Create User</button>
                <div style={{opacity: showError ? '1':'0'}} className="error-login">
                <p>Email or Password wrongs</p>
                </div>
            </form>
        </div>
    </>


)}
export default LoginForm