import {useContext, useEffect} from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom"

const useIsLogin = () => {
    const {user} = useContext(userContext);
    const navigate = useNavigate()

    useEffect(()=>{
        if(user.id == undefined){
            navigate('/login')
        }
    
    },[])

}

export default useIsLogin;