import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

export default function MainLayout({ children }) {
    return (
      <>
        <Navbar />
        <div className="main-container">
          <Outlet/>
        </div>
        <Footer />
      </>
    );
  }