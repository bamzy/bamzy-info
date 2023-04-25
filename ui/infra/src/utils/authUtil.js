
import axios from 'axios';
const loginAPI = 'http://localhost:8083/search';
export function checkLoggedIn(){
    const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined'|| userToken == null) {
            return false
        } else return userToken;
}

export function logMeOut(navigate){
    console.log("in logmeout: " + localStorage.getItem('user-token'));
    localStorage.removeItem('user-token');
    
}
export function logMeIn(data,navigate){
    
    
    const formDataJson = {
        email: data.get('email'),
        password: data.get('password'),
      };
      console.log(formDataJson);
      axios.post(loginAPI, formDataJson).then((response) => {
        
        // const data = response.data;
        // const token = data.token;
        // if (!token) {
        //     alert('Unable to login. Please try after some time.');
        //     return;
        // }
        const token = "dfasdfsdfasfs";
        localStorage.clear();
        localStorage.setItem('user-token', token);
        
    }).catch((error) => {
      
        alert("Oops! Some error occured.");
    });
}
