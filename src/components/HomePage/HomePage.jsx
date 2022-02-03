import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import TopBar from "../topBar/TopBar";
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import userContext from "../../context/userContext";
const HomePage = () => {
    const {user} = useContext(userContext)

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