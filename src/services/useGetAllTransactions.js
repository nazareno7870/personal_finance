import { useEffect,useState } from "react";

const useGetAllTransactions = () => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 

    
    const [transactions, settransactions] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        window.fetch(PATH+`/transactions/all`,{
            signal: signal
        })
        .then(res => res.json())
        .then(data => settransactions(data))
        .catch((err) => {
            if (err.name === "AbortError") {
              console.log("successfully aborted");
            } else {
              setError(err);
            }
          });
        return () => controller.abort();
        
    }, []);

    return ({transactions,settransactions});
}

export default useGetAllTransactions;