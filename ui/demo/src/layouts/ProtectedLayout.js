import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
export default function GuestLayout() {
    return (
        <>
            <Sidebar />
            <div id="body-content"> this is protected
                <Outlet />
            </div>
        </>
  );


}