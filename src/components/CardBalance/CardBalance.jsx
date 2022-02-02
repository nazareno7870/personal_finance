import IconAdd from '../../assets/add-icon.svg'
import './CardBalance.css'

const CardBalance = () => {
    return (
        <div className="card-balance">
            <div className="balance">
                <p>Your Balance</p>
                <h2><span>$</span>70.000,00</h2>
            </div>
            <div className="add-icon">
                <img src={IconAdd} alt="Add Icon" />
            </div>
        </div>
    );
}

export default CardBalance;