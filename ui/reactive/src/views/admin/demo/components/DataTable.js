
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

            const resp = await fetch("http://localhost:8081/users",{
                method: "GET", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                }
            })
            let jsonData = await resp.json();
            setData(jsonData)
        } catch (err){
            console.log("err:"+err)
        }
    }
    let list= <div>no data found</div>;
    if (data.length!==0)  {
         list = data.map((item,index)=>{
            return <li style={{backgroundColor:"#12eda",margin:"5px",padding:"10px"}} key={index} >{item.id}-{item.username} ({item.email})</li>
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