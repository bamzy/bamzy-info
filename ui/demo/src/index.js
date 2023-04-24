import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sendToAnalytics from './utils/analytics';
import reportWebVitals from './reportWebVitals';
import Elastic from './pages/Elastic';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Elastic from './pages/Elastic';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/elastic",
    element: <Elastic />,
  }
]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(sendToAnalytics);
