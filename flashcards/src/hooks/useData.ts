import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";



const useData = () => {

const [data, setData] = useState([]);
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);

useEffect(() => {

const controller = new AbortController();
setIsLoading(true)
apiClient
.get('?amount=10', {signal: controller.signal})
.then(response =>{
    setData(response.data);
    setIsLoading(false);
})
.catch(error =>{
    if(error instanceof CanceledError)return;
    setError(error.message);
    setIsLoading(false);
})

return () => controller.abort()

}, []);
    return {data, error, isLoading}

};

export default useData;