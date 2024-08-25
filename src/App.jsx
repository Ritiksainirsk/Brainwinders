import "./App.css";
import Navbar from "./Components/Navbar";

import { Route,Routes, useLocation } from "react-router-dom";
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

function App() {
  const loc = useLocation()

  return (
    <>
      <div className="">
        {loc.pathname === "/admin" ? <AdminNavbar/> : "" || loc.pathname === "/createpage" ? <AdminNavbar/> : "" || loc.pathname === "/viewpage" ? <AdminNavbar/> :<Navbar />}        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/dmit" element={<Dmit/>} />
          <Route path="/careercounselling" element={<CareerCounselling/>} />
          <Route path="/psychometrictest" element={<PsychometricTest/>} />
          <Route path="/interesttest" element={<InterestTest/>} />
          <Route path="/franchise" element={<Franchise/>} />
          <Route path="/gallary" element={<Gallery/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path='/createpage' element={<CreatePage/>}/>
          <Route path='/viewpage' element={<ViewPage/>}/>
          {/* pages For Dmit */}
          <Route path='/dmit/dmitforchildern' element={<DmitForChildern/>}/>
          {/* pages for Career Couselling */}
          <Route path='/careercounselling/careerGuidanceforclass10th&12th' element={<CareerGuidanceForClass10and12/>}/>
          {/* Psychometric Test */}
          <Route path='/psychometrictest/aptitudetest' element={<AptitudeTest/> }/>
          <Route path='/psychometrictest/iqtest' element={<IqTest/> }/>
          <Route path='/psychometrictest/persnalitytest' element={<PersnalityTest/> }/>
          {/* Blog pages */}
          <Route path='/blog/:title' element={<BlogDetail/> }/>
          <Route path='/blog/viewmore/:title' element={<BlogViewMore/> }/>
        </Routes>
        {loc.pathname === "/admin" ? "" : "" || loc.pathname === "/createpage" ? "" : "" || loc.pathname === "/viewpage" ? "" :<Footer/>}        
      </div>
    </>
  );
}

export default App;
