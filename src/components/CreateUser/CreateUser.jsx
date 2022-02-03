import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './CreateUser.css'

const CreatUser = ()=>{
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [error, seterror] = useState([])
    const [showError, setshowError] = useState(false)
    const [createUser, setcreateUser] = useState(false);
    const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    

    const navigate = useNavigate()

    const handlename = e =>{
        setname(e.target.value)
    }

    const handleEmail = e =>{
        setemail(e.target.value)
    }

    const handlePassword = e=>{
        setPassword(e.target.value)
    }

    const handleLogin = ()=>{
        navigate('/login')
    }

    const handleSubmit = e=>{
        e.preventDefault()
        seterror([])
        let errors = []

        if(name.length<6) seterror(errors.push('The name must contain 6 or more letters'))
        if(!regex.test(email)) seterror(errors.push('Enter a correct email'))
        if(password.length<8) seterror(errors.push('The password must contain 8 or more letters'))

        seterror(errors)

        if(errors.length > 0){
        setshowError(true)
        setTimeout(() => {
            setshowError(false)
        }, 3000);}

        if(errors.length===0){
            const obj = {
                email,
                name,
                password
                }
    
            axios.post(PATH+'/users/createuser',obj).then(resp=>{
                setcreateUser(true)
            }).catch(err=> {
                seterror(['Already existing email, please choose another.'])
                setshowError(true)
                setTimeout(() => {
                    setshowError(false)
                }, 3000);
            }   
                )
        }
    }
    if(createUser === false){
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="login-form" >
                <h3>Sign Up</h3>
                <div className="signup-form">
                    <div className="input-form">
                        <label>Name - Minimum 6 characters</label>
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Name" onChange={handlename} value={name}></input>
                        {name.length < 6
                    ? <div className="wrong"><i className="fas fa-times-circle"></i></div>
                    : <div className="check"><i className="fas fa-check-circle"></i></div>}
                    </div>

                </div>
                <div className="signup-form">
                    <div className="input-form">
                        <label>Email</label>
                        <i className="far fa-envelope"></i>
                        <input type='email' placeholder="Email" onChange={handleEmail} value={email}></input>
                        {regex.test(email)
                        ? <div className="check"><i className="fas fa-check-circle"></i></div>
                        : <div className="wrong"><i className="fas fa-times-circle"></i></div>
                        }
                    </div>

                </div>
                <div className="signup-form">
                    <div className="input-form">
                        <label>Password - Minimum 8 characters</label>
                        <i className="fas fa-key"></i>
                        <input type="password" placeholder="Password" onChange={handlePassword} value=      {password}></input>
                        {password.length < 8
                    ? <div className="wrong"><i className="fas fa-times-circle"></i></div>
                    : <div className="check"><i className="fas fa-check-circle"></i></div>}  
                    </div>
    
                </div>
                <button className="btn create-user">Sign Up</button>
                <p className="or" onClick={()=>navigate('/login')} style={{cursor:'pointer',marginBottom:'10px'}}>Back to Login Form</p>


                        <div className="modal-container" style={
                                showError === false
                                ? {visibility:'hidden',opacity:0}
                                : {opacity:1}
                            }>

                            <div className="modal-errors">
                            {error.map(err =><p key={err}>* {err}</p>)}
                            </div>

                        </div>
            </form>
        </div>
    )}else{
        return(
            <div className="container">
                <div className="login-form create-user">
                    <p>User created successfully</p>
                    <button className="btn create-user exit" onClick={handleLogin}>Go to Login</button>
                </div>
            </div>
        )
    }
}

export default CreatUser