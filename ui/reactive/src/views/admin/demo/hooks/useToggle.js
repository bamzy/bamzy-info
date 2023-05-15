import { useState } from "react"
export default function useToggle(initValue){
    const [toggle,setToggle] = useState(initValue);

    const toggleValue = (val) => {
        
        if( typeof val === "boolean" ) setToggle(val);
        else setToggle(!toggle);
    }
    return [toggle,toggleValue];


}