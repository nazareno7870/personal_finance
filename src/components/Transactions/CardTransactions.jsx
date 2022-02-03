import TransactionItem from "./TransactionItem";

const CardTransactions = () => {
    return (
        <div className="card-transactions">
            <div className="title"><h3>Transactions</h3></div>
            <TransactionItem/>
        </div>
    );
}

export default CardTransactions;