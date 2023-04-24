import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sendToAnalytics from './utils/analytics';
import reportWebVitals from './reportWebVitals';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import Elastic from './pages/Elastic';
import About from './pages/About';
import OutlinedCard from './components/LogCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/elastic",
        element: <Elastic />,
      },{
        path: "/about",
        element: <About />,
      }, 
      {
        path: "elasticlogs/:logid",
        element: <OutlinedCard />,
      }

    ]
  },{
    path: "/login",
    element: <Login />,
  }
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(sendToAnalytics);
