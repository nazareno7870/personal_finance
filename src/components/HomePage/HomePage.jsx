import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import NavBar from "../NavBar/NavBar";
import TopBar from "../TopBar/TopBar";

const HomePage = () => {
    return (
        <>
            <Background/>
            <TopBar title={'Wallet'}/>
            <CardBalance/>
            <LastTransactions/>
            <NavBar/>
        </>

    );
}

export default HomePage;