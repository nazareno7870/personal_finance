import TransactionItem from "./TransactionItem";
import useGetAllTransactions from './../../services/useGetAllTransactions';
import { useEffect, useState } from 'react';
import Spinner from "../Spinner/Spinner";
import useIsLogin from "../../services/useIsLogin";

const CardTransactions = ({switchButton,token,setmodalActive}) => {
    useIsLogin()
    const {transactions,loading} = useGetAllTransactions({filter:switchButton,token})
    const [transactionsfiltered, settransactionsfiltered] = useState([]);
    
    useEffect(()=>{
        const filter = transactions.filter(el=> el.type === switchButton)
        settransactionsfiltered(filter)
    },[switchButton,transactions])

    return (
        <div className="card-transactions">
            <div className="title"><h3>Transactions</h3></div>
            {!loading?
            transactionsfiltered.map(el=>{
               
            return(
                <TransactionItem
                concept={el.concept}
                category={el.category}
                type={el.type}
                amount={el.amount}
                id={el.id_transaction}
                date={el.date}
                key={el.id_transaction}
                setmodalActive={setmodalActive}
                />
            )
            })
            :<Spinner/>
        }

        </div>
    );
}

export default CardTransactions;