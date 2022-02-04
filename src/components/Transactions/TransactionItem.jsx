import { useEffect, useState } from "react";
import './CardTransactions.css'
import CheckIcon from '../../assets/check-icon.svg'
import TrashIcon from '../../assets/trash-icon.svg'
import ChangeIcon from '../../assets/change-icon.svg'
import axios from "axios";


const TransactionItem = ({concept,category,type,amount,date,id}) => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
    const [showModalChange, setshowModalChange] = useState(false);
    const [conceptinput, setconceptinput] = useState(concept);
    const [categoryinput, setcategoryinput] = useState(category);
    const [amountinput, setamountinput] = useState(amount);
    const [dateinput, setdateinput] = useState(date);
    const [errors, seterrors] = useState([]);
    const [showModalErrors, setshowModalErrors] = useState(false);
    const [showBannerAdd, setshowBannerAdd] = useState(false);
    const [dateformat, setdateformat] = useState('');
    const [isDelete, setisDelete] = useState(false);
    const [showModalDelete, setshowModalDelete] = useState(false);

    useEffect(()=>{
        let yourDate = new Date(dateinput)
        setdateinput(yourDate.toISOString().split('T')[0])
        const elDate = new Date(dateinput)
        const dateGMT = new Date(elDate.getTime()+10800000)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        setdateformat(dateGMT.toLocaleDateString("es-ES", options))
    },[dateinput,date])


    const handleConcept = e=>{
        setconceptinput(e.target.value)
    }

    const handleCategory = e=>{
        setcategoryinput(e.target.value)
    }

    const handleAmount = e=>{
        setamountinput(e.target.value)
    }

    const handleDate = e=>{
        setdateinput(e.target.value)
    }

    const handleChange = ()=>{
        setshowModalChange(true)
    }

    const handleDelete = ()=>{
        setshowModalDelete(true)
    }

    const sendUpadte = ()=>{
        const obj = {
            concept:conceptinput,
            amount:amountinput,
            date:dateinput,
            category:categoryinput,
            id_transaction:id
            }

        axios.post(PATH+'/transactions/update',obj).then(resp=>{
            setshowBannerAdd(true)
            setTimeout(() => {
                setshowBannerAdd(false)
            }, 1500);
            setshowModalChange(false)
        }).catch(error=>console.log(error))

    }

    const handleConfirmDelete = ()=>{
        const obj = {
            id_transaction:id
            }

        axios.post(PATH+'/transactions/delete',obj).then(resp=>{
            setisDelete(true)
            setshowModalDelete(false)
        }).catch(error=>console.log(error))
    }

    const handleSubmit = e=>{
        e.preventDefault()
        let arrayErrors = []
        !conceptinput && arrayErrors.push('You must entry a concept')
        !categoryinput && arrayErrors.push('You must entry a category')
        !amountinput && arrayErrors.push('You must entry an amount')
        !dateinput && arrayErrors.push('You must entry a date')

        if(arrayErrors.length>=1){
            seterrors(arrayErrors)
            setshowModalErrors(true)
            setTimeout(() => {
                setshowModalErrors(false)
            }, 2000);
        }else{
            sendUpadte()
        }
    }

    return (
        <>
        {!isDelete && 
                    <div className="item-transaction" id={id} key={id}>
                    <div className="container-left">
                        <div className="icons-item">
                            <img src={TrashIcon} onClick={handleDelete} alt="Trash Icon" />
                            <img src={ChangeIcon} onClick={handleChange} alt="Modify Icon" />
                        </div>
                        <div className="info-transaction">
                            <h3>{conceptinput}</h3>
                            <p>{dateformat}</p>
                        </div>
                    </div>
        
                    <div className={`amount-transaction ${type === 'debit' ? 'outflow': 'entry'}`}>
                        <h3>{type === 'debit' ? '-': '+'}${amountinput}</h3>
                    </div>
                </div>
        }

        
        {showModalChange 
        ?        <div className={"modal-container"}>
                    <div className="modal-item">
                        <form className={`form-modify-transaction`}>
                            <div className="item-new-transaction" >
                                <label >Concept</label>
                                <input style={{borderBottom: conceptinput === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={conceptinput} onChange={handleConcept} type={'text'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Category</label>
                                <input style={{borderBottom: categoryinput === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={categoryinput} onChange={handleCategory} type={'text'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Amount $</label>
                                <input style={{borderBottom: amountinput === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={amountinput} onChange={handleAmount} type={'number'} />
                            </div>
                            <div className="item-new-transaction">
                                <label >Date</label>
                                <input style={{borderBottom: dateinput === '' ?'1px solid #c70808':'1px solid #9c0682' }} value={dateinput} onChange={handleDate} type={'date'} />
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

            {showModalDelete && 
            <div className="modal-container">
                <div className="modal-delete">
                    <p>Are you sure you want to delete the transaction?</p>
                    <div className="buttons-modal">
                        <button onClick={handleConfirmDelete} className="btn delete">YES</button>
                        <button onClick={()=>setshowModalDelete(false)} className="btn nodelete">NO</button>
                    </div>
                </div>
            </div>}

            <div className="banner-add change" style={{opacity: showBannerAdd ? 1 : 0}}>
                <p>Change successfully</p>
                <img src={CheckIcon} alt="Check Icon" />
            </div>
    </>
    );
}

export default TransactionItem;