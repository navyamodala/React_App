import { Component, useState } from "react";
const UseStateexample1 =()=>{
     const[login,setlogin]=useState(false);
    const loginhandler =()=>{
        setlogin((login)=>!login)
    }

    
    
    
    return(
        <>
        <h4>use state example</h4>
        {login?<h4>welocome user</h4>:<h4>please login</h4>}
        <button onclick={loginhandler}>click me</button>
        

        </>
    

    )
}
export  default  UseStateexample1