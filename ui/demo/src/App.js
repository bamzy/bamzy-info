import { Outlet } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" >
      
        <Sidebar  />
      
      <div id="body-content" >
        <h1><Outlet /></h1>
      </div>
    </div>
  );
}

export default App;
