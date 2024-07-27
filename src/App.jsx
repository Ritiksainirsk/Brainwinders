import "./App.css";
import Navbar from "./Components/Navbar";

import { Route,Routes } from "react-router-dom";
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

function App() {
  return (
    <>
      <div className="">
        <Navbar />
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
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
