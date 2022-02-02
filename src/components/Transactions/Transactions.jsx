import Background from '../Backgorund/Background';
import NavBar from '../NavBar/NavBar';
import './Transactions.css'
import IconAdd from '../../assets/add-icon.svg'
import TopBar from '../TopBar/TopBar';
import { useState } from 'react';

const Transactions = () => {
    const [addIsVisible, setaddIsVisible] = useState(false);
    return (
            <>
                <Background/>
                <TopBar title={'Transactions'}/>

                    <div className="card-new-transaction">
                        <div className="new-transaction">
                            <p>New Transaction</p>
                        </div>
                        <div className="add-icon">
                            <img onClick={()=>setaddIsVisible(prev=>!prev)} src={IconAdd} alt="Add Icon" />
                        </div>
                    </div>
                    <form className={`form-new-transaction ${addIsVisible ? '' : 'hidden'}`}>
                        <label >Date</label>
                        <input type={'date'} />
                        <label >Concept</label>
                        <input type={'text'} />
                        <label >Category</label>
                        <input type={'text'} />
                        <label >Type</label>
                        <select>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>
                        <label >Amount</label>
                        <input type={'number'} />
                        <button className='btn' onClick={e=>e.preventDefault()}>Submit</button>

                    </form>

                <NavBar/>
            </>
    );
}

export default Transactions;