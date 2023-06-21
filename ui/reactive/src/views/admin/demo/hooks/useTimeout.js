import { useState,useEffect ,useRef, useCallback} from "react"
export default function useTimeout(callback,wait){
    const handler = useRef();
    const callbackRef = useRef(callback);

    const clear = useCallback(() => {
        console.log('clear'+handler.current);
        if(handler.current) clearTimeout(handler.current);
        handler.current=null;
    },[])

    const reset = useCallback(()=>{
        clear();
        handler.current = setTimeout(callbackRef.current,wait);
        console.log('reset' + handler.current);
    },[wait])

    useEffect(()=>{
        callbackRef.current = callback;
    },[callback])
    return [reset,clear];


}