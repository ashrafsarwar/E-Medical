import React, { Suspense, useEffect, useRef } from "react";
import "./Home.css";

const Navbar = React.lazy(() => import("../../Components/Navbar/Navbar"));
const Hero = React.lazy(() => import("../../Components/Hero/Hero"));
const About = React.lazy(() => import("../About/About"));
const Services = React.lazy(() => import("../Services/Services"));
const Testimonials = React.lazy(() =>
  import("../../Components/Testimonials/Testimonials")
);
const Contact = React.lazy(() => import("../Contact/Contact"));
const Footer = React.lazy(() => import("../Footer/Footer"));

function Home() {
  return (
    <div>
      <Suspense fallback={<div className="loader">Loading..</div>}>
        <Navbar id="navbar" />
        <Hero id="hero" />
        <About id="about" />
        <Services id="services" />
        <Testimonials id="testimonials" />
        <Contact id="contact" />
        <Footer id="footer" />
      </Suspense>
    </div>
  );
}

export default Home;
