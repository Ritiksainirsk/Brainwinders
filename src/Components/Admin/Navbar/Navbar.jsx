import React from "react";

import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";

import CreatePage from "../../../assets/add-product.png";
import List from "../../../assets/list.png";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 px-24 py-3 shadow-lg z-50 flex items-center justify-between">
        <div className="navbar-center">
          <a className="">
            {/* <img src="https://www.brainwonders.in/images/logo.webp" /> */}
            <h2 className="font-bold text-2xl">Admin</h2>
          </a>

          <div className=" flex gap-5 justify-center pl-8">
            <Link to={"/createpage"} style={{ textDecoration: "none" }}>
              <div className="sidebar-item flex bg-gray-200 gap-2 justify-center items-center px-4 py-1 rounded-lg">
                <img src={CreatePage} alt="" className="w-5" />
                <p>Create Page</p>
              </div>
            </Link>

            <Link to={"/viewpage"} style={{ textDecoration: "none" }}>
              <div className="sidebar-item flex bg-gray-200 gap-2 justify-center items-center px-4 py-1 rounded-lg">
                <img src={List} alt="" className="w-5" />
                <p>All Pages</p>
              </div>
            </Link>
          </div>
        </div>
        <PiPhoneCallFill className="text-2xl bounce hidden lg:block " />
      </div>
    </div>
  );
}
