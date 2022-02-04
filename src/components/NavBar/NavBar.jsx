import HomeIcon from '../../assets/home-icon.svg'
import StatisticsIcon from '../../assets/statistics-icon.svg'
import AddTransaction from '../../assets/add-transaction-icon.svg'
import LogOutIcon from '../../assets/logout-icon.svg'
import { useNavigate } from "react-router-dom"
import './NavBar.css'
import useLogOut from '../../services/useLogOut'

const NavBar = () => {
    const navigate = useNavigate();
    const logout = useLogOut()
    return (
        
        <nav className="navbar">
            <div className={`icon ${location.pathname === '/' ? 'active' : ''}`} onClick={()=>navigate('/')}><img src={HomeIcon} alt="Home Icon" /></div>
            <div className={`icon ${location.pathname === '/transactions' ? 'active' : ''}`} onClick={()=>navigate('/transactions')}><img src={AddTransaction} alt="Transaction Icon" /></div>
            <div className={`icon ${location.pathname === '/statistics' ? 'active' : ''}`} onClick={()=>navigate('/statistics')}><img src={StatisticsIcon} alt="Statistics Icon" /></div>
            <div className={`icon`} onClick={()=>logout()}><img src={LogOutIcon} alt="Logout Icon" /></div>
        </nav>

    );
}

export default NavBar;