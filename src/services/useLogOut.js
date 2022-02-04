import {useContext, useEffect} from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom"

const useLogOut = () => {
    const {setuser} = useContext(userContext);
    const navigate = useNavigate()

    const logout = ()=>{
        setuser({})
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('token') 
        navigate('/login')
    }
    
    return(logout)

}

export default useLogOut;