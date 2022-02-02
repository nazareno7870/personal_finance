import HomeIcon from '../../assets/home-icon.svg'
import StatisticsIcon from '../../assets/statistics-icon.svg'
import UserIcon from '../../assets/user-icon.svg'
import AddTransaction from '../../assets/add-transaction-icon.svg'
import { useNavigate } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navbar">
            <div className="icon active" onClick={()=>navigate('/')}><img src={HomeIcon} alt="Home Icon" /></div>
            <div className="icon" onClick={()=>navigate('/transactions')}><img src={AddTransaction} alt="Transaction Icon" /></div>
            <div className="icon"><img src={StatisticsIcon} alt="Statistics Icon" /></div>
            <div className="icon"><img src={UserIcon} alt="User Icon" /></div>
        </nav>
    );
}

export default NavBar;