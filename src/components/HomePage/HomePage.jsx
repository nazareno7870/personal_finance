import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import TopBar from "../TopBar/TopBar.jsx";
import NavBar from "../NavBar/NavBar";

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