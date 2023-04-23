import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import sendToAnalytics from './utils/analytics';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
