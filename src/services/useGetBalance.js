import { useEffect,useState } from "react";

const useGetBalance = () => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 

    
    const [balance, setbalance] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        window.fetch(PATH+`/transactions/balance`,{
            signal: signal
        })
        .then(res => res.json())
        .then(data => setbalance(data))
        .catch((err) => {
            if (err.name === "AbortError") {
              console.log("successfully aborted");
            } else {
              setError(err);
            }
          });
        return () => controller.abort();
        
    }, []);

    return ({balance,setbalance});
}

export default useGetBalance;