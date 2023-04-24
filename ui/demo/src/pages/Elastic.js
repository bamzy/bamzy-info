import { useEffect, useState } from "react"
import LogCard from "../components/LogCard"
import axios from "axios";
export default function Elastic(props){

    const [cards,setCards] = useState(null);

    const fetchData = async ()=>{


        axios
        .post("http://localhost:8083/search", {
            
                indexName: 'react_logs',
                query: {
                    match_all: {}
                },
                size:5
            
        })
        .then((response) => {
            const logCards =response.data.hits.map((item,index)=>{
                    return <LogCard log={item} />
            })
            setCards(logCards);
            console.log(response);
        })
        .catch((err) => console.log(err));

        

        
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return (
        <div>
            {cards!=null? cards:<span>loading..</span>}  
        </div>
    );

}