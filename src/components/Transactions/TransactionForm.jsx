import CheckIcon from '../../assets/check-icon.svg'
import { useState, useContext} from 'react';
import IconAdd from '../../assets/add-icon.svg'
import axios from 'axios';
import userContext from "../../context/userContext";

const TransactionForm = ({setswitchButton}) => {
    const {user} = useContext(userContext)
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
    const [addIsVisible, setaddIsVisible] = useState(false);
    const [concept, setconcept] = useState('');
    const [category, setcategory] = useState('');
    const [type, settype] = useState('debit');
    const [amount, setamount] = useState('');
    const [date, setdate] = useState('');
    const [errors, seterrors] = useState([]);
    const [showModalErrors, setshowModalErrors] = useState(false);
    const [showBannerAdd, setshowBannerAdd] = useState(false);

    const handleType = e=>{
        settype(e.target.value)
    }

    const handleConcept = e=>{
        setconcept(e.target.value)
    }

    const handleCategory = e=>{
        setcategory(e.target.value)
    }

    const handleAmount = e=>{
        setamount(e.target.value)
    }

    const handleDate = e=>{
        setdate(e.target.value)
    }

    const sendData = ()=>{
        const obj = {
            concept,
            amount,
            date,
            type,
            user_id:user.id,
            category
            }

        axios.post(PATH+'/transactions/new',obj).then(resp=>{
            setshowBannerAdd(true)
            setTimeout(() => {
                setshowBannerAdd(false)
            }, 1500);
            handleResetData()
            setswitchButton('')
            setswitchButton('debit')
        }).catch(error=>console.log(error))

    }

    const handleResetData = ()=>{
        setaddIsVisible(false)
        setTimeout(() => {
            setconcept('')
            setamount('')
            setcategory('')
            setdate('')
            seterrors([])
        }, 500);

    }

    const handleSubmit = e=>{
        e.preventDefault()
        let arrayErrors = []
        !concept && arrayErrors.push('You must entry a concept')
        !category && arrayErrors.push('You must entry a category')
        !amount && arrayErrors.push('You must entry an amount')
        !date && arrayErrors.push('You must entry a date')

        if(arrayErrors.length>=1){
            seterrors(arrayErrors)
            setshowModalErrors(true)
            setTimeout(() => {
                setshowModalErrors(false)
            }, 2000);
        }else{
            sendData()
        }
    }

    return (
        <>
            <div className="card-new-transaction">
                <div className="new-transaction">
                    <p>New Transaction</p>
                </div>
                    <div className="add-icon" onClick={()=>setaddIsVisible(prev=>!prev)}>
                        <img src={IconAdd} alt="Add Icon" />
                    </div>
            </div>

            <form className={`form-new-transaction ${addIsVisible ? '' : 'hidden'}`}>
                <div className="title-desktop">Add new Transaction</div>
                <div className="item-new-transaction" >
                    <label >Concept</label>
                    <input style={{borderBottom: concept === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={concept} onChange={handleConcept} type={'text'} />
                </div>
                <div className="item-new-transaction">
                    <label >Category</label>
                    <input style={{borderBottom: category === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={category} onChange={handleCategory} type={'text'} />
                </div>
                <div className="item-new-transaction">
                    <label >Type</label>
                    <select style={{borderBottom: '1px solid #9c0682' }} onChange={handleType} defaultValue={type}>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>
                <div className="item-new-transaction">
                    <label >Amount $</label>
                    <input style={{borderBottom: amount === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={amount} onChange={handleAmount} type={'number'} />
                </div>
                <div className="item-new-transaction">
                    <label >Date</label>
                    <input style={{borderBottom: date === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={date} onChange={handleDate} type={'date'} />
                </div>

                <button className='btn' onClick={handleSubmit}>Add</button>

            </form>

            {showModalErrors && 
            <div className="modal-container">
                <div className="modal-errors">
                    {errors.map(err =><p key={err}>* {err}</p>)}
                </div>
            </div>}

            <div className="banner-add" style={{opacity: showBannerAdd ? 1 : 0}}>
                <p>Transaction created successfully</p>
                <img src={CheckIcon} alt="Check Icon" />
            </div>
    </>
    );
}

export default TransactionForm;