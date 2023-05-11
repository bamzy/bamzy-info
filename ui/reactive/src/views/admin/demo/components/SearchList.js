import {
    Heading,Button
  } from "@chakra-ui/react";
import VirtualizedList from "./VirtualizedList";
import { useState } from "react";
import { useDictionary } from "../hooks/useDictionary"; 
export default function SearchList(){
    const [filter,setFilter] = useState("");
    const [reverse,setReverse] = useState(false);
    const dict = useDictionary();


    const handleSearch = (event)=>{
        setFilter(event.target.value);
    }
    let data =dict.filter(item=> item.startsWith(filter));
    if (reverse) data.reverse();
    return (<>
        <div style={{marginLeft: "50px",marginRight:"50px",padding:"20px"}}>
            <input type="text" placeholder="search" onChange={handleSearch}/>
            
            <Button colorScheme='blue' onClick={()=>setReverse(!reverse)}>Reverse</Button>
        </div>
        <VirtualizedList items={data} itemHeight={30} containerHeight={310}/>
    </>);
}