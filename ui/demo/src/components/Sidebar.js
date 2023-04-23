import React from 'react';
import './Sidebar.css';
import { bubble as Menu } from 'react-burger-menu';
import Button from '@mui/material/Button';
const props= () => {
  return (
    
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/login">
          Login
        </a>
        <a className="menu-item" href="/about">
          about us
        </a>
        <a className="menu-item" href="/desserts">
          <Button variant='contained' color='success'>New</Button>
        </a>
      </Menu>
    
  );
};


function Home() {
  return <h2>Home</h2>;
}
function About() {  
  return <h2>About</h2>;
}

function Login() {
  return <h2>Login</h2>;

}
export default props;