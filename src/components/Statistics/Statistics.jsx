import useGetAllTransactions from "../../services/useGetAllTransactions";
import Background from "../Backgorund/Background";
import NavBar from "../NavBar/NavBar";
import TopBar from "../topBar/TopBar";
import useIsLogin from "../../services/useIsLogin";
import { useState,useContext,useEffect} from "react";
import userContext from "../../context/userContext";
import Spinner from "../Spinner/Spinner";
import './Statistics.css'
import SideBar from "../SideBar/SideBar";
const Statistics = () => {
    useIsLogin()
    const {user} = useContext(userContext)
    const {transactions,loading} = useGetAllTransactions({token:user.token})
    const [transactionsfiltered, settransactionsfiltered] = useState([]);
    const [categories, setcategories] = useState([]);
    const [filter, setfilter] = useState('');
    const [showcategories, setshowcategories] = useState(false);

    useEffect(()=>{
        if(categories.length === 0){
            const catsarray = transactions.map(el=>el.category)
            const array = new Set(catsarray)
            const newcats = [...array].sort()
            setcategories(newcats)
        }
        const fil = transactions.filter(el=> el.category === filter)
        settransactionsfiltered(fil)

    },[transactions,filter])


    const handleFilter = e=>{
        setfilter(e.target.innerText)
        setshowcategories(false)
    }

    return (
        <>
        <Background/>
        <div className="desktop-container">

            <div className="left-side">
                <SideBar/>
            </div>

            <div className="right-side">

                <TopBar title={'Statistics'} />
                <div className="card-switch card-categories" >



                    {!loading
                    ?
                    <>     
                        <button className="btn" onClick={()=>setshowcategories(!showcategories)}>Select Category</button>



                    </>
                    :<Spinner/>}

                    </div>
                    <div className={`form-new-transaction categories ${showcategories ? '' : 'hidden'}`} style={{height:showcategories?`${categories.length*70}px`:'0px',minHeight:showcategories?'100px':'0px'}}>
                        <div className="categories"> 
                        {categories.map(cat=>{
                                    return(<button key={cat} onClick={handleFilter} className={`btn categories ${filter===cat ? 'active' : ''}`}>{cat}</button>)
                                })}
                        </div>
                    </div>

                    <div className={`form-new-transaction categories-desktop`}>
                    {!loading 
                    ?<div className="categories"> 
                        {categories.map(cat=>{
                                    return(<button key={cat} onClick={handleFilter} className={`btn categories ${filter===cat ? 'active' : ''}`}>{cat}</button>)
                                })}
                     </div>
                     :<Spinner/>}
                    </div>

                    <div className="card-transactions desktop">
                    <div className="title"><h3>{filter===''?'Select category':filter}</h3></div>
                    {!loading
                        ?   transactionsfiltered.map(el=>{
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
                        :<Spinner/>
                    }




                </div>
            </div>
        </div>


        <NavBar/>
    </>
    );
}

export default Statistics;