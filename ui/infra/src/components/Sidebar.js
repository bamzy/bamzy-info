import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import {Button,IconButton} from '@mui/material';
import {Link,useNavigate} from 'react-router-dom';
import { checkLoggedIn ,logMeOut} from '../utils/authUtil';
import {Login, Logout} from '@mui/icons-material';
import {useAuth0} from '@auth0/auth0-react';
export default function Sidebar(props)  {
  const navigate = useNavigate();
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  useEffect(()=>{
    let token = checkLoggedIn();
    if(token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
    console.log('sidebar did a check'+ token)

  },[isLoggedIn])

  const handleLogout = ()=> {
    logMeOut(navigate);
    navigate('/logout');
    setIsLoggedIn(false);
  }
 
  const sidebarLinks = [
    {to:'/',text:'Home',needsAdmin:null},
    {to:'/about',text:'About',needsAdmin:null},
    {to:'/login',text:'Login',needsAdmin:false},
    {to:'/elastic',text:'Elastic Dashboard',needsAdmin:true},
  ]
  
  const sidebarItems = sidebarLinks.map((item,index)=>{
    if ((item.needsAdmin && isLoggedIn) || (!isLoggedIn && !item.needsAdmin) || item.needsAdmin===null ){              
      return <li key={index}><Link to={item.to}>{item.text}</Link></li> 
    }
  });
  return (       
    <>
    <div id="sidebar">
      <h5>{isLoggedIn? 'Admin':'Guest'}</h5>
      <div>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <nav>
        <ul>
          {sidebarItems}                   
          <li>  
          {isLoggedIn &&<IconButton  variant="outlined" color="error" onClick={handleLogout}><Logout /></IconButton >}
          </li>
        </ul>
      </nav>
      <div id="detail"></div>
    </div>
  </>   
        
    
  );
};
