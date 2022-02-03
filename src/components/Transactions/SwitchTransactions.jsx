import { useState } from "react";
import CardTransactions from "./CardTransactions";

const SwitchTransactions = () => {
    const [switchButton, setswitchButton] = useState('Debits');

    return (
        <>
            <div className="card-switch">
                <button onClick={()=>setswitchButton('Debits')} className={`btn ${switchButton === 'Debits' && 'active'}`}>Debits</button>
                <button onClick={()=>setswitchButton('Credits')} className={`btn ${switchButton === 'Credits' && 'active'}`}>Credits</button>
            </div>
            <CardTransactions/>
        </>
    );
}


export default SwitchTransactions;