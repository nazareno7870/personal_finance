import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import TopBar from '../topBar/TopBar';
import TransactionForm from './TransactionForm';
import SwitchTransactions from './SwitchTransactions';
import { useState,useContext} from "react";
import userContext from "../../context/userContext";
import SideBar from '../SideBar/SideBar';

const Transactions = () => {
    const {user} = useContext(userContext)
    const [switchButton, setswitchButton] = useState('debit');
    const [modalActive, setmodalActive] = useState(false);
    return (
            <>
                <Background/>
                <div className="desktop-container">

                    <div className="left-side">
                        <SideBar/>
                    </div>

                    <div className="right-side">

                        <TopBar title={'Transactions'}/>
                        <TransactionForm
                        setswitchButton={setswitchButton}
                        modalActive={modalActive}
                        />
                        <SwitchTransactions
                        token={user.token}
                        switchButton={switchButton}
                        setswitchButton={setswitchButton}
                        setmodalActive={setmodalActive}
                        />
                    </div>
                </div>


                <NavBar/>
            </>
    );
}

export default Transactions;