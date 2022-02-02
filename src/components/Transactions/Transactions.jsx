import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import TopBar from '../TopBar/TopBar';
import TransactionForm from './TransactionForm';


const Transactions = () => {
   
    return (
            <>
                <Background/>
                <TopBar title={'Transactions'}/>
                <TransactionForm/>
                <NavBar/>
            </>
    );
}

export default Transactions;