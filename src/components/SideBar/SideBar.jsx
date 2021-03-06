import HomeIcon from '../../assets/home-icon.svg'
import StatisticsIcon from '../../assets/statistics-icon.svg'
import AddTransaction from '../../assets/add-transaction-icon.svg'
import LogOutIcon from '../../assets/logout-icon.svg'
import { useNavigate } from "react-router-dom"
import './SideBar.css'
import useLogOut from '../../services/useLogOut'
const SideBar = () => {
    const navigate = useNavigate();
    const logout = useLogOut()
    return (
        
        <div className="side-bar">
            <div className={`icon ${location.pathname === '/' ? 'active' : ''}`} onClick={()=>navigate('/')}><img src={HomeIcon} alt="Home Icon" /><p>Home</p></div>
            <div className={`icon ${location.pathname === '/transactions' ? 'active' : ''}`} onClick={()=>navigate('/transactions')}><img src={AddTransaction} alt="Transaction Icon" /><p>Transactions</p></div>
            <div className={`icon ${location.pathname === '/statistics' ? 'active' : ''}`} onClick={()=>navigate('/statistics')}><img src={StatisticsIcon} alt="Statistics Icon" /><p>Statistics</p></div>
            <div className={`icon`} onClick={()=>logout()}><img src={LogOutIcon} alt="Logout Icon" /><p>Logout</p></div>
        </div>

    );
}

export default SideBar;





