import Background from "../Backgorund/Background";
import CardBalance from "../CardBalance/CardBalance";
import LastTransactions from "../LastTransactions/LastTransactions";
import NavBar from "../NavBar/NavBar";

const HomePage = () => {
    return (
        <>
            <Background/>
            <CardBalance/>
            <LastTransactions/>
            <NavBar/>
        </>

    );
}

export default HomePage;