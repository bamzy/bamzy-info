
import {useState} from 'react';
import { createStore } from 'redux';
import { useSelector } from 'react-redux'

import store from '../utils/store';
// ACTION
import { addAction,deleteAction } from '../utils/actions';







const selectTodos = state => state.todos
export default function ReduxToDo (){

    const handleme = ()=>{
        store.dispatch(addAction());
    }
    const {todos:items} = store.getState();
    const otheritems = useSelector(selectTodos)

    // console.log('rendered again')
    // console.log(items)
    const list = items.map((item,index)=>{
        return <li style={{backgroundColor:"#12eda",margin:"5px",padding:"10px"}} key={index} onClick={()=> store.dispatch(deleteAction(index))}>{item}</li>
    });

    return (
        <>
        <ul>
            {list}
        </ul>
        <button onClick={handleme} style={{backgroundColor:"teal"}}>add</button>
        </>
    )
}