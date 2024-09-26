import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/Admin/AdminNavbar";

export default function AdminLayout({ children }) {
    return (
      <>
        <AdminNavbar />
        <div className="admin-container">
          <Outlet/>
        </div>
      </>
    );
  }