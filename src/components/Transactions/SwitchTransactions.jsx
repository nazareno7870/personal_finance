import { useState } from "react";
import CardTransactions from "./CardTransactions";

const SwitchTransactions = () => {
    const [switchButton, setswitchButton] = useState('debit');

    return (
        <>
            <div className="card-switch">
                <button onClick={()=>setswitchButton('debit')} className={`btn ${switchButton === 'debit' && 'active'}`}>Debits</button>
                <button onClick={()=>setswitchButton('credit')} className={`btn ${switchButton === 'credit' && 'active'}`}>Credits</button>
            </div>
            <CardTransactions
            switchButton={switchButton}
            />
        </>
    );
}


export default SwitchTransactions;