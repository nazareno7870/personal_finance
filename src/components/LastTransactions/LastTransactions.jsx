import './LastTransactions.css'
import useGetAllTransactions from './../../services/useGetAllTransactions';
const LastTransactions = () => {
    const {transactions} = useGetAllTransactions()

    return (
    <div className="card-transactions">
        <div className="title"><h3>Last Transactions</h3></div>
        {transactions[0]?.concept?
            transactions.map(el=>{
                const elDate = new Date(el.date)
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const date = elDate.toLocaleDateString("es-ES", options)

            return(
                <div key={el.id_transaction} className="item-transaction">
                    <div className="info-transaction">
                        <h3>{el.concept}</h3>
                        <p>{date}</p>
                    </div>
                    <div className={`amount-transaction ${el.type === 'debit' ? 'outflow': 'entry'}`}>
                        <h3>{el.type === 'debit' ? '-': '+'}${el.amount}</h3>
                    </div>
                </div>
            )
            })
            :<></>
        }




    </div>
    );
}

export default LastTransactions;