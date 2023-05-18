import './App.css';
import React,{useEffect,useState,Outlet} from 'react';
import GuestLayout from "./layouts/GuestLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/Home";

import Login from './pages/Login';
import ErrorPage from './pages/Error';
import Elastic from './pages/Elastic';
import About from './pages/About';
import { RouterProvider } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
function App() {

  
// const routes = createRoutesFromElements([
//   {
//     path: "/",
//     element: <GuestLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: {HomePage},
//       },{
//         path: "/about",
//         element: <About />,
//       },{
//         path: "/login",
//         element: <Login />,
//       } 
      

//     ]
//   },
// ]); 

// return routes

  // return (
  //   <Routes  >
  //     <Route element={<GuestLayout />}  > {/*this is called a layout route because it does not have a path */}
  //         <Route  path="/"  Component={HomePage}  />
  //         <Route path="error" element={<ErrorPage />}  />
  //         <Route path="login" element={<Login />} errorElement={<ErrorPage />}/>
  //         <Route path="about" element={<About />} />
  //     </Route>
        
  //     <Route element={<ProtectedLayout />}  > {/*this is called a layout route because it does not have a path */}
  //         <Route  path="/dashboard"  Component={HomePage}  />
  //         <Route path="/dashboard/elastic" element={<Elastic />} />            
  //     </Route>
     
        

  //   </Routes>
  // );
// return (<div>hi</div>)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
      const userToken = localStorage.getItem('user-token');
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
      }
      setIsLoggedIn(true);
  }

  useEffect(() => {
      checkUserToken();
  }, [isLoggedIn]);

	return (
		<React.Fragment>
      <div>from app</div>
	    <Outlet />				
		</React.Fragment>
    )
}

export default App;