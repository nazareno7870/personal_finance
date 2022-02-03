import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import TopBar from '../topBar/TopBar';
import TransactionForm from './TransactionForm';
import SwitchTransactions from './SwitchTransactions';


const Transactions = () => {
   
    return (
            <>
                <Background/>
                <TopBar title={'Transactions'}/>
                <TransactionForm/>
                <SwitchTransactions/>
                <NavBar/>
            </>
    );
}

export default Transactions;