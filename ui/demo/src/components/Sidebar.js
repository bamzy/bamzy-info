import React from 'react';
import './Sidebar.css';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
export default function Sidebar(props)  {

  const {logout} = useAuth();
 
  return (       
    <>
    <div id="sidebar">
      
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
          <li>
          <Link to={`/dashboard/elastic`}>Elastic</Link>
          </li>
          <li>
            <Link to={`about`}>About</Link>
          </li>
          <li>
            <Link to={`/login`}>Login</Link>
          </li>
          <li>
            <a className="menu-item" href="/desserts">
              <Button variant='contained' color='error' onClick={logout}>Logout</Button>
            </a>
          </li>
        </ul>
      </nav>
      <div id="detail"></div>
    </div>
  </>   
        
    
  );
};
