import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import TopBar from '../topBar/TopBar';
import TransactionForm from './TransactionForm';
import SwitchTransactions from './SwitchTransactions';
import { useState } from "react";


const Transactions = () => {
    const [switchButton, setswitchButton] = useState('debit');
    return (
            <>
                <Background/>
                <TopBar title={'Transactions'}/>
                <TransactionForm
                setswitchButton={setswitchButton}
                />
                <SwitchTransactions
                switchButton={switchButton}
                setswitchButton={setswitchButton}
                />
                <NavBar/>
            </>
    );
}

export default Transactions;