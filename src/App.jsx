import "./App.css";
import AdminLayout from "./Layouts/AdminLayout";
import MainLayout from "./Layouts/MainLayout";

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
import Marks2Career from "./Pages/FooterPages/Marks2Career";
import AdminDeshboard from "./Pages/AdminDeshboard";
import DmitEditablePage from "./Components/Admin/EditablePages/Dmit/DmitEditablePage";

function App() {
  const loc = useLocation();

  return (
    <>
      <Routes>
        {/* Routes for non-admin layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dmit" element={<Dmit />} />
          <Route path="/careercounselling" element={<CareerCounselling />} />
          <Route path="/psychometrictest" element={<PsychometricTest />} />
          <Route path="/interesttest" element={<InterestTest />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          {/* pages For Dmit */}
          <Route path="/dmit/dmitforchildern" element={<DmitForChildern />} />
          {/* pages for Career Couselling */}
          <Route
            path="/careercounselling/careerGuidanceforclass10th&12th"
            element={<CareerGuidanceForClass10and12 />}
          />
          {/* Blog pages */}
          <Route path="/blog/viewmore/:title" element={<BlogViewMore />} />
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
          {/* Footer Page */}
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/marks2career" element={<Marks2Career />} />
          {/* Add more non-admin routes here */}

          {/* admin Editable pages */}
          <Route path="/admin/dmit_edit_page" element={<DmitEditablePage />} />
        </Route>

        {/* Admin login/signup routes without navbar */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/signup" element={<SignUp />} />
        {/* Blog pages */}
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/blog/viewmore/:title" element={<BlogViewMore />} />



        {/* Routes for admin layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/*" element={<AdminDeshboard />} />
          {/* Add more admin routes here */}
        </Route>

      </Routes>
    </>
  );
}

export default App;

// <div className="">
//   {loc.pathname === "/admin/login" ||
//   loc.pathname === "/admin/blog" ||
//   loc.pathname === "/admin/signup" ? null : loc.pathname === "/admin" ? (
//     <AdminNavbar />
//   ) : (
//     <Navbar />
//   )}
//   <Routes>
//     <Route path="/" exact element={<Home />} />
//     <Route path="/dmit" element={<Dmit />} />
//     <Route path="/careercounselling" element={<CareerCounselling />} />
//     <Route path="/psychometrictest" element={<PsychometricTest />} />
//     <Route path="/interesttest" element={<InterestTest />} />
//     <Route path="/franchise" element={<Franchise />} />
//     <Route path="/gallary" element={<Gallery />} />
//     <Route path="/aboutus" element={<AboutUs />} />
//     <Route path="/blog" element={<Blog />} />
//     <Route path="/admin" element={<Deshboard />} />
//     {/* pages For Dmit */}
//     <Route path="/dmit/dmitforchildern" element={<DmitForChildern />} />
//     {/* pages for Career Couselling */}
//     <Route
//       path="/careercounselling/careerGuidanceforclass10th&12th"
//       element={<CareerGuidanceForClass10and12 />}
//     />
//     {/* Psychometric Test */}
//     <Route
//       path="/psychometrictest/aptitudetest"
//       element={<AptitudeTest />}
//     />
//     <Route path="/psychometrictest/iqtest" element={<IqTest />} />
//     <Route
//       path="/psychometrictest/persnalitytest"
//       element={<PersnalityTest />}
//     />
//     {/* Blog pages */}
//     <Route path="/blog/:title" element={<BlogDetail />} />
//     <Route path="/blog/viewmore/:title" element={<BlogViewMore />} />
//     {/* Footer Page */}
//     <Route path="/contactus" element={<ContactUs />} />
//     <Route path="/marks2career" element={<Marks2Career />} />

//     {/* Admin Validation pages like login extra */}
//     <Route path="/admin/login" element={<Login />} />
//     <Route path="/admin/signup" element={<SignUp />} />
//     <Route path="/admin/blog" element={<BlogForm />} />
//     <Route path="/admin/dmit_edit_page" element={<DmitEditablePage />} />

//   </Routes>
//   {loc.pathname === "/admin" ||
//   loc.pathname === "/admin/signup" ||
//   loc.pathname === "/admin/blog" ||
//   loc.pathname === "/admin/login" ? null : (
//     <Footer />
//   )}
// </div>
