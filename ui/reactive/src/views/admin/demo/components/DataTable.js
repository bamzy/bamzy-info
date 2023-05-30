
import {useEffect, useState} from 'react';
import { createStore } from 'redux';
import { useSelector } from 'react-redux'
import axios from 'axios';
import store from '../utils/store';
// ACTION
import { addAction,deleteAction } from '../utils/actions';







export default function DataTable (){
    const [data,setData] = useState([]);
    useEffect(()=>{
        loadItems();
    },[])

    const loadItems = async ()=>{
        try {

            const resp = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population",{
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    
                }
            })
            let jsonData = await resp.json();
            setData(jsonData.data)
        } catch (err){
            console.log("err:"+err)
        }
    }
    let list= <div>no data found</div>;
    if (Array.isArray(data) && data.length!==0)  {
         list = data.map((item,index)=>{
            return <li style={{backgroundColor:"#12eda",margin:"5px",padding:"10px"}} key={index} >{item.Nation} at year: {item.Year}, had the Population: {(item.Population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </li>
        });
    }
    

    return (
        <>
        <ul>
            {list}
        </ul>
        <button onClick={loadItems} style={{backgroundColor:"teal"}}>refresh</button>
        </>
    )
}