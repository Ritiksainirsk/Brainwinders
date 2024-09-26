import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="w-64 bg-[#022F46] text-white h-full">
        <ul className="">
          <Link to="page_management">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Page Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Menu Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Contact Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Blog Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Blog Category Mgmt
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Gallary Category Mgmt
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Gallary Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              FAQ Management
            </li>
          </Link>
          <Link to="dashboard">
            <li className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 cursor-pointer">
              Footer Contant Management
            </li>
          </Link>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
    </>
  );
}
