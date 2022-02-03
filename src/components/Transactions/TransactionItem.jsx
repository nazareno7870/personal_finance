import { useState } from "react";
import './CardTransactions.css'
import CheckIcon from '../../assets/check-icon.svg'
import TrashIcon from '../../assets/trash-icon.svg'
import ChangeIcon from '../../assets/change-icon.svg'

const object = {
    concept:'Gasto',
    category:'Comida',
    type:'debit',
    amount: '1500',
    date: '2022-01-01'
}


const TransactionItem = () => {

    const [showModalChange, setshowModalChange] = useState(false);
    const [concept, setconcept] = useState(object.concept);
    const [category, setcategory] = useState(object.category);
    const [type, settype] = useState(object.type);
    const [amount, setamount] = useState(object.amount);
    const [date, setdate] = useState(object.date);
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
            setshowBannerAdd(true)
            setTimeout(() => {
                setshowBannerAdd(false)
            }, 1500);
            handleResetData()
        }
    }

    return (
        <>

        <div className="item-transaction">
            <div className="container-left">
                <div className="icons-item">
                    <img src={TrashIcon} alt="Trash Icon" />
                    <img src={ChangeIcon} alt="Modify Icon" />
                </div>
                <div className="info-transaction">
                    <h3>{object.concept}</h3>
                    <p>{object.date}</p>
                </div>
            </div>

            <div className="amount-transaction outflow">
                <h3>${object.amount}</h3>
            </div>
        </div>
        
        {showModalChange 
        ?        <div className={"modal-container"}>
                    <div className="modal-item">
                        <form className={`form-modify-transaction`}>
                            <div className="item-new-transaction" >
                                <label >Concept</label>
                                <input style={{borderBottom: concept === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={concept} onChange={handleConcept} type={'text'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Category</label>
                                <input style={{borderBottom: category === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={category} onChange={handleCategory} type={'text'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Amount $</label>
                                <input style={{borderBottom: amount === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={amount} onChange={handleAmount} type={'number'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Date</label>
                                <input style={{borderBottom: date === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={date} onChange={handleDate} type={'date'} />
                            </div>

                            <button className='btn' onClick={handleSubmit}>Change</button>

                        </form>
                    </div>
                </div>
        :<></> }

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

export default TransactionItem;