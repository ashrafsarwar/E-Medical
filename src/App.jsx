import React, { useEffect, useRef } from "react";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Department from "./Components/Department/Department";
import DoctorDetails from "./Components/DoctorDetails/DoctorDetails";

function App() {
  const homeRef = useRef(null);
  useEffect(() => {
    homeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div ref={homeRef}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        */}
        <Route path="/services/department" element={<Department />} />
        <Route path="/services/doctor" element={<DoctorDetails />} />
      </Routes>
    </div>
  );
}

export default App;
