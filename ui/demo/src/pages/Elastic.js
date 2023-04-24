import { useEffect, useState } from "react"
import LogCard from "../components/LogCard"
import axios from "axios";
import {MenuItem,Select,InputLabel} from "@mui/material"
import BamzySpinner from "../components/BamzySpinner"
import './Elastic.css';
import IconButton from '@mui/material/IconButton';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

export default function Elastic(props){

    const [cards,setCards] = useState(null);
    const [pageSize,setPageSize] = useState(10);
    const [isLoading,setIsLoading] = useState(true);

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
            setIsLoading(false);
            setCards(logCards);            
        })
        .catch((err) => console.log(err));

        

        
    }
    const handlePageSizeChange = (event) =>{ 
        setIsLoading(true);
        setPageSize(event.target.value);        
        console.log(pageSize)
        // fetchData();
        
    }
    const goup = ()=>{
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
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>                
            </Select>
            <div id="elastic-log-cards-container">
                {isLoading? <span><BamzySpinner /></span>: cards}  
            </div>
            <IconButton id="go-up-button"  aria-label="fingerprint" color="secondary">
                <a href="#page-size-label">
                    <ArrowUpward />

                </a>
            </IconButton>
        </>
    );

}