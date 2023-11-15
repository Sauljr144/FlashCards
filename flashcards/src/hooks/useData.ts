import axios from "axios";
import { useEffect, useState } from "react";
import { Category } from "../services/Category-Service";


const useData = () => {
    //useState to set our data with a type of our Category service
    const [category, setCategory] = useState<Category[]>([])
    const [error, setError] = useState('')
   
    
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
        console.log(error)
    
    }, [])



   return { category, setCategory};

};

export default useData;