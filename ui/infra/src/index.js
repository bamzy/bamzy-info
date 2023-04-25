import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from "react-router-dom";

import './index.css';
import sendToAnalytics from './utils/analytics';
import reportWebVitals from './reportWebVitals';



import  ProtectedRoute  from './utils/ProtectedRoute';
import Login from './pages/Login'
import Logout from './pages/Logout'
import Home from './pages/Home'
import About from './pages/About'
import Elastic from './pages/Elastic';
import GuestLayout from './layouts/GuestLayout';
import ProtectedLayout from './layouts/ProtectedLayout'
import Dashboard from './pages/Dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>        
        <Route  element={<GuestLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Route>
        <Route  element={<ProtectedLayout />}>
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/elastic' element={<ProtectedRoute><Elastic /></ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);


reportWebVitals(sendToAnalytics);
