import { formToJSON } from 'axios';
import {useState} from 'react';
const INITIAL_STATE  ={fname:"",lname:""}
export default function BasicForm(){
    const [submitted,setSubmitted] = useState(false);
    const submitLoginForm = async(e)=> {
        e.preventDefault();
        try {
            const response = await fetch("bamzy.info", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form), // body data type must match "Content-Type" header
            });
            console.log(response);
            setSubmitted(true);
            clear();
        }catch(err){
            
        };
    }
    const clear = ()=>{
        setForm(INITIAL_STATE);
    }
    const handleChange = (e)=>{
        
        setForm({...form,[e.target.id]:e.target.value})
    }
    const [form,setForm] =  useState(INITIAL_STATE);
    if (submitted){
        return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
            <div>tnx for submitting </div>
        </div>
        )
    }
    return (
        <form onSubmit={submitLoginForm} method="post">
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",padding:"10px"}}>
                <div style={{width:"20%"}}>
                    <label htmlFor="fname">First Name</label>
                </div>
                <div style={{width:"80%",border:"2px black solid"}}>
                    <input type="text" id="fname" name="fname" style={{width:"100%"}} onChange={handleChange} />
                </div>

            </div>
            <div style={{display:"flex",flexWrap:"nowrap",width:"100%",padding:"10px"}}>
                <div style={{width:"20%"}}>
                    <label htmlFor="lname">Last Name</label>
                </div>
                <div style={{width:"80%",border:"2px black solid"}}>
                    <input type="text" id="lname" name="lname" style={{width:"100%"}} onChange={handleChange}/>
                </div>

            </div>
            <button style={{backgroundColor:"gray",padding:"10px"}} >send</button>
        </form>
    )
}