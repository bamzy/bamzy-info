import '../App.css';
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
export default function GuestLayout() {
    return (
        <>
            <Sidebar />
            <div id="body-content" data-layoutname="Guest Layout">                
                <Outlet />
            </div>
        </>
  );


}