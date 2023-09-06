import axios from "axios";
import { useEffect, useState } from "react";
import { MyData } from "../services/card-service";
import { Category } from "../services/Category-Service";



const useData = () => {

    const [data, setData] = useState<MyData[]>([])
    const [category, setCategory] = useState<Category[]>([])
    const [amount, setAmount] = useState(0)
    const [error, setError] = useState('')
   
    
    
    useEffect(() => {
        const controller = new AbortController();
    
        axios.get('https://opentdb.com/api.php?amount=10&category=11',{
            params:{
                amount: amount,
                category: category
            },
            signal: controller.signal
        })
        .then(response => {
            setData(response.data.results)
        })
        .catch(error => setError(error.message))

        return () => controller.abort();

    }, [])

    useEffect(() => {

        const controller = new AbortController();
        axios.get('https://opentdb.com/api_category.php', {
            signal: controller.signal
        })
        .then(response => {
            setCategory(response.data.trivia_categories)
        })
        .catch(error => setError(error.message))

        return () => controller.abort();
    
    }, [])


    

   return {data, category};

};

export default useData;