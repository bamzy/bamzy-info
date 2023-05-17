import { useState } from "react";

export default function useHistory(initVal,historySize=10){
    let initValArr = [];
    if (initVal) initValArr = [initVal]  ;
    const [history,setHistory] = useState(initValArr);
    const [val,setVal] = useState(initVal);
    const [size,setSize] = useState(historySize);

    const set = (val)=>{
        if (val === history[history.length-1]) return;
        setVal(val);

        let tmp = [...history];
        
        if (tmp.length === size) tmp = tmp.slice(1);
        tmp.push(val);
        // if (history.length===0) setHistory([val])
        setHistory(tmp)
    }
    const getHistory = () => {
        console.log(history)
        return history;
        
    }
    const undo = ()=>{
        if (history.length>0){
            history.pop();
            if(history.length>0) setVal(history[history.length-1]);
            else setVal(null);
            setHistory([...history]);
        }
    }

    return [val, set,getHistory,undo]
}