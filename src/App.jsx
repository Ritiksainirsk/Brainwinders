import "./App.css";
import Navbar from "./Components/Navbar";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Dmit from "./Pages/Dmit";
import CareerCounselling from "./Pages/CareerCounselling";
import PsychometricTest from "./Pages/PsychometricTest";
import InterestTest from "./Pages/InterestTest";
import Franchise from "./Pages/Franchise";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer";
import Admin from "./Pages/Admin";
import CreatePage from "./Components/Admin/CreatePage/CreatePage";
import AdminNavbar from "./Components/Admin/Navbar/Navbar";
import ViewPage from "./Components/Admin/ViewPage/ViewPage";
import DmitForChildern from "./Pages/DmitPages/DmitForChildern";
import CareerGuidanceForClass10and12 from "./Pages/CareerCousellingPages/CareerGuidanceForClass10and12";
import AptitudeTest from "./Pages/PsychometricTestPages/AptitudeTest";
import IqTest from "./Pages/PsychometricTestPages/IqTest";
import PersnalityTest from "./Pages/PsychometricTestPages/PersnalityTest";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import BlogViewMore from "./Pages/BlogViewMorePage/BlogViewMore";
import ContactUs from "./Pages/FooterPages/ContactUs";
import Login from "./Pages/BackendUi/AdminValidation/Login";
import SignUp from "./Pages/BackendUi/AdminValidation/SignUp";
import BlogForm from "./Pages/BackendUi/BlogFeild/BlogForm";
import Marks2Career from "./Pages/FooterPages/Marks2Career";

function App() {
  const loc = useLocation();

  return (
    <>
      <div className="">
        {loc.pathname === "/admin/login" ||
        loc.pathname === "/admin/blog" ||
        loc.pathname === "/admin/signup" ? null : loc.pathname === "/admin" ||
          loc.pathname === "/admin/createpage" ||
          loc.pathname === "/admin/viewpage" ? (
          <AdminNavbar />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dmit" element={<Dmit />} />
          <Route path="/careercounselling" element={<CareerCounselling />} />
          <Route path="/psychometrictest" element={<PsychometricTest />} />
          <Route path="/interesttest" element={<InterestTest />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/createpage" element={<CreatePage />} />
          <Route path="/admin/viewpage" element={<ViewPage />} />
          {/* pages For Dmit */}
          <Route path="/dmit/dmitforchildern" element={<DmitForChildern />} />
          {/* pages for Career Couselling */}
          <Route
            path="/careercounselling/careerGuidanceforclass10th&12th"
            element={<CareerGuidanceForClass10and12 />}
          />
          {/* Psychometric Test */}
          <Route
            path="/psychometrictest/aptitudetest"
            element={<AptitudeTest />}
          />
          <Route path="/psychometrictest/iqtest" element={<IqTest />} />
          <Route
            path="/psychometrictest/persnalitytest"
            element={<PersnalityTest />}
          />
          {/* Blog pages */}
          <Route path="/blog/:title" element={<BlogDetail />} />
          <Route path="/blog/viewmore/:title" element={<BlogViewMore />} />
          {/* Footer Page */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/marks2career" element={<Marks2Career />} />

          {/* Admin Validation pages like login extra */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/signup" element={<SignUp />} />
          <Route path="/admin/blog" element={<BlogForm />} />


        </Routes>
        {loc.pathname === "/admin" ||
        loc.pathname === "/admin/createpage" ||
        loc.pathname === "/admin/viewpage" ||
        loc.pathname === "/admin/signup" ||
        loc.pathname === "/admin/blog" ||
        loc.pathname === "/admin/login" ? null : (
          <Footer />
        )}
      </div>
    </>
  );
}

export default App;
