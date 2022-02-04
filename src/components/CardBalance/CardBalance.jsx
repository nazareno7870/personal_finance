import IconAdd from '../../assets/add-icon.svg'
import './CardBalance.css'
import useGetBalance from './../../services/useGetBalance';
import Spinner from './../Spinner/Spinner';
import { useNavigate } from "react-router-dom"

const CardBalance = ({token}) => {
    const {balance,loading} = useGetBalance({token})
    const navigate = useNavigate()

    return (
        
        <div className="card-balance">
            {!loading 
            ?   <>
                    <div className="balance">
                        <p>Your Balance</p>
                        <h2><span>$</span>{balance[0]?.balance}</h2>
                    </div>
                    <div className="add-icon" onClick={()=>navigate('/transactions')} >
                        <img src={IconAdd} alt="Add Icon" />
                    </div>
                </>
            :<Spinner/>}

        </div>
    );
}

export default CardBalance;