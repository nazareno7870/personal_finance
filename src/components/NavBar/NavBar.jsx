import HomeIcon from '../../assets/home-icon.svg'
import StatisticsIcon from '../../assets/statistics-icon.svg'
import UserIcon from '../../assets/user-icon.svg'
import AddTransaction from '../../assets/add-transaction-icon.svg'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="icon active"><img src={HomeIcon} alt="Home Icon" /></div>
            <div className="icon"><img src={AddTransaction} alt="Transaction Icon" /></div>
            <div className="icon"><img src={StatisticsIcon} alt="Statistics Icon" /></div>
            <div className="icon"><img src={UserIcon} alt="User Icon" /></div>
        </nav>
    );
}

export default NavBar;