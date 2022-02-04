import CardTransactions from "./CardTransactions";

const SwitchTransactions = ({switchButton, setswitchButton,token,setmodalActive}) => {

    return (
        <>
            <div className="card-switch">
                <button onClick={()=>setswitchButton('debit')} className={`btn ${switchButton === 'debit' && 'active'}`}>Debits</button>
                <button onClick={()=>setswitchButton('credit')} className={`btn ${switchButton === 'credit' && 'active'}`}>Credits</button>
            </div>
            <CardTransactions
            token={token}
            switchButton={switchButton}
            setmodalActive={setmodalActive}
            />
        </>
    );
}


export default SwitchTransactions;