const deleteAction = (id)=>{
    return {type:"deleteItem",payload:id}
}
const addAction = ()=>{
    return {type:"addItem",payload:"nothing"}
}

export {addAction,deleteAction};