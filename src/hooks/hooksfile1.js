import { useEffect, useState } from "react"
import axios from "axios"
const  Fetch=()=>{
    useEffect(()=>{
        fetchData()
    },[])
    const [todo,settodo] =useState=([])
    const fetchData = async()=>{
        const response=await axios.get("https://fakestoreapi.com/products")
        console.log(response.status)
            // if (response.status===200){
            //     settodo(response.data)
            // }
            
            
        
    }

    return(
        <>
        <h1>hekko user</h1>
        </>
    )
}
export default Fetch