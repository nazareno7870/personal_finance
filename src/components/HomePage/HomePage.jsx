import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import TopBar from "../topBar/TopBar";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import userContext from "../../context/userContext";
import useIsLogin from "../../services/useIsLogin";
import SideBar from "../SideBar/SideBar";
import './HomePage.css'

const HomePage = () => {
    const {user} = useContext(userContext)
    useIsLogin()
    
    return (
        <>  

            <Background/>

            <div className="desktop-container">

                <div className="left-side">
                    <SideBar/>
                </div>

                <div className="right-side">

                    <TopBar title={'Wallet'}/>
                    <CardBalance
                    token={user.token}
                    />
                    <LastTransactions
                    token={user.token}
                    />
                </div>
             </div>

            <NavBar/>
        </>

    );
}

export default HomePage;