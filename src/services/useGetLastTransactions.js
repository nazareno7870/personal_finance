import { useEffect,useState } from "react";

const useGetLastTransactions = ({token}) => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
    const [transactions, settransactions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        window.fetch(PATH+`/transactions/last`,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({token}),
            signal: signal
        })
        .then(res => res.json())
        .then(data => {
          settransactions(data)
          setloading(false)
        })
        .catch((err) => {
            if (err.name === "AbortError") {
              console.log("successfully aborted");
            } else {
              setError(err);
            }
          });
        return () => controller.abort();
        
    }, []);

    return ({transactions,settransactions,loading});
}

export default useGetLastTransactions;