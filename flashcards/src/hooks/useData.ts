import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MyData } from "../services/card-service";
import { Category } from "../services/Category-Service";



const useData = () => {

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
    
    }, [])


    

   return { category, setCategory};

};

export default useData;