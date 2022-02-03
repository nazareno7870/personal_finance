import { useEffect,useState } from "react";

const useGetBalance = ({token}) => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 

    
    const [balance, setbalance] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        window.fetch(PATH+`/transactions/balance`,{
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({token}),
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