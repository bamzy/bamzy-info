import { useState } from "react";
export default function useLocalStorage(key, initObj){
    const [item,setItem] = useState(initObj);
    if(!localStorage.getItem(key)){
        localStorage.setItem(key,JSON.stringify(initObj));

    } 


    return JSON.parse(localStorage.getItem(key));
}