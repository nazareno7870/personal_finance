import { useEffect,useState } from "react";

const useGetBalance = ({token}) => {
    const PATH = import.meta.env.DEV ? import.meta.env.VITE_API_DEV : import.meta.env.VITE_API_PROD; 
    const [balance, setbalance] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setloading] = useState(true);
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
        .then(data => {
          setbalance(data)
          setloading(false)})
        .catch((err) => {
            if (err.name === "AbortError") {
              console.log("successfully aborted");
            } else {
              setError(err);
            }
          });
        return () => controller.abort();
        
    }, []);

    return ({balance,setbalance,loading});
}

export default useGetBalance;