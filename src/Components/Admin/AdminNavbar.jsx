import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();

    navigate("/admin/login");
  };

  return (
    <div>
      <div className="navbar bg-[#022F46] h-20 px-24 py-3 shadow-lg z-50 flex items-center justify-between">
        <div className="navbar-center">
          <a className="">
            <h2 className="font-bold text-2xl text-white">Admin Panel</h2>
          </a>
        </div>
        <button className="font-bold" onClick={() => LogOut()}>
          Logout
        </button>
      </div>
    </div>
  );
}
