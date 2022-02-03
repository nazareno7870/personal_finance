import IconAdd from '../../assets/add-icon.svg'
import './CardBalance.css'
import useGetBalance from './../../services/useGetBalance';

const CardBalance = () => {
    const {balance} = useGetBalance()

    return (
        <div className="card-balance">
            <div className="balance">
                <p>Your Balance</p>
                <h2><span>$</span>{balance[0]?.balance}</h2>
            </div>
            <div className="add-icon">
                <img src={IconAdd} alt="Add Icon" />
            </div>
        </div>
    );
}

export default CardBalance;