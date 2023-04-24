import { useEffect, useState } from "react"
import LogCard from "../components/LogCard"
import axios from "axios";
import {MenuItem,Select,InputLabel} from "@mui/material"
import { Audio,LineWave,Oval,CirclesWithBar } from 'react-loader-spinner'
export default function Elastic(props){

    const [cards,setCards] = useState(null);
    const [pageSize,setPageSize] = useState(10);

    const fetchData = async ()=>{


        axios
        .post("http://localhost:8083/search", {
            
                indexName: 'react_logs',
                query: {
                    match_all: {}
                },
                size:pageSize
            
        })
        .then((response) => {
            const logCards =response.data.hits.map((item,index)=>{
                    return <LogCard log={item} indexNumber={index+1} key={index} />
            })
            setCards(logCards);            
        })
        .catch((err) => console.log(err));

        

        
    }
    const handlePageSizeChange = (event) =>{ 
        
        setPageSize(event.target.value);        
        console.log(pageSize)
        // fetchData();
        
    }
    useEffect(()=>{
        fetchData();
    },[pageSize]);
    return (
        <>
            <InputLabel id="page-size-label">Page size</InputLabel>
            <Select
                labelId="page-size-label"
                id="demo-simple-select"
                value={pageSize}
                label="page size"
                onChange={handlePageSizeChange}
            >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
            <div>
                {cards!=null? cards:<span><CirclesWithBar
                                        height="50%"
                                        width="80%"
                                        radius="90"
                                        color="green"
                                        ariaLabel="loading"
                                        wrapperStyle
                                        wrapperClass
                                        /></span>}  
            </div>
        </>
    );

}