import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider, BrowserRouter
} from "react-router-dom";

import './index.css';
import App from './App';
import sendToAnalytics from './utils/analytics';
import reportWebVitals from './reportWebVitals';



import { ProtectedRoute } from './utils/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/elastic",
//         element: <ProtectedRoute><Elastic /></ProtectedRoute>,
//       },{
//         path: "/about",
//         element: <About />,
//       }, 
//       {
//         path: "elasticlogs/:logid",
//         element: <OutlinedCard />,
//       }

//     ]
//   },{
//     path: "/login",
//     element: <Login />,
//   }
// ]); 

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <React.StrictMode>
//      <RouterProvider router={router} />
//   </React.StrictMode>
// );
root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>        
          <App />        
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);


reportWebVitals(sendToAnalytics);
