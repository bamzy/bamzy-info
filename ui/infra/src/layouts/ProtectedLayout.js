import '../App.css';
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import '../components/Sidebar.css'
export default function GuestLayout() {
    return (
        <>
            <Sidebar />
            <div id="body-content" data-layoutname="Protected Layout">                 
                <Outlet />
            </div>
        </>
  );


}