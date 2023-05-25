import { createStore } from 'redux';
//REDUCER
  const todoHandler = (alldata  = {todos:["work item 1","work item 2"]},action)=>{
    switch(action.type){
        case "deleteItem": 
            const newItems = alldata.todos.filter((item,index)=> action.payload!==index);
            return {todos:newItems};
        case "addItem":
                return {todos:[...alldata.todos,"work item "+(alldata.todos.length+1)]}
                
        default :
            return alldata;
    }
  }
  //Global Store
  let store  = createStore(todoHandler)
  //LOGGING
  store.subscribe(()=>console.log("store:"+ store.getState().todos))
  export default store;