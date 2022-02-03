import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import TopBar from '../topBar/TopBar';
import TransactionForm from './TransactionForm';
import SwitchTransactions from './SwitchTransactions';
import { useState,useContext} from "react";
import userContext from "../../context/userContext";

const Transactions = () => {
    const {user} = useContext(userContext)
    const [switchButton, setswitchButton] = useState('debit');
    return (
            <>
                <Background/>
                <TopBar title={'Transactions'}/>
                <TransactionForm
                setswitchButton={setswitchButton}
                />
                <SwitchTransactions
                token={user.token}
                switchButton={switchButton}
                setswitchButton={setswitchButton}
                />
                <NavBar/>
            </>
    );
}

export default Transactions;