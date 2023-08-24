import axios from "axios";
import { useEffect, useState } from "react";

const useData = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')


    useEffect(() => {
    
        axios.get('https://opentdb.com/api.php?amount=10&category=11')
        .then(response => setData(response.data))
        .catch(error => setError(error.message))

    }, [])

   return {data, error};

};

export default useData;