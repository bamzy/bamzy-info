import { useState } from "react";
export default function useStorage(inpKey,initVal){
    const [key,setKey] = useState(inpKey);
    
    let val = initVal;
    const [stateVal,setStateVal] = useState(val);
    // debugger;
    
    const setObj = (obj)=>{
        // debugger;
        setStateVal(obj);
        localStorage.setItem(key,JSON.stringify(obj))
    }
    const removeObj = ()=>{
        setStateVal(null);
        localStorage.removeItem(key);
    }
    if(localStorage.getItem(key)) val = JSON.parse(localStorage.getItem(key));
    else setObj(val);
    return [val, setObj,removeObj];
}