import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import TopBar from "../topBar/TopBar";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import userContext from "../../context/userContext";
import useIsLogin from "../../services/useIsLogin";

const HomePage = () => {
    const {user} = useContext(userContext)
    useIsLogin()
    
    return (
        <>
            <Background/>
            <TopBar title={'Wallet'}/>
            <CardBalance
            token={user.token}
            />
            <LastTransactions
            token={user.token}
            />
            <NavBar/>
        </>

    );
}

export default HomePage;