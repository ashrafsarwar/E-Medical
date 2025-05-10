import React from "react";
import logo from "../.././../public/logo.png";
import { PrimaryBtn, SecondaryBtn } from "../Btns/PrimaryBtn";
import "./Navbar.css";

function Navbar({ id }) {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };
  return (
    <div id={id}>
      <nav className="navbar flex justify-between items-center mx-[10px] my-[10px] sm:mx-[30px] md:mx-[60px] lg:mx-[70px] ">
        <div className="logo">
          <img
            src={logo}
            alt=""
            className="w-[140px] sm:w-[130px] h-[24px] md:w-[160px] h-[26px] lg:w-[180px] xl:w-[200px] h-[30px] 2xl:w-[250px] h-[40px]"
          />
        </div>
        <ul className="hidden items-center gap-[25px] sm:hidden md:hidden lg:flex xl:flex xl2:flex">
          <a href="#"></a>
          <li className="navlink hover:text-primary font-semibold text-gray-500  cursor-pointer">
            Home
          </li>
          <li className="navlink hover:text-primary font-semibold text-gray-500  cursor-pointer">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              About
            </a>
          </li>
          <li className="navlink hover:text-primary font-semibold text-gray-500  cursor-pointer">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
          </li>
          <li className="navlink hover:text-primary font-semibold text-gray-500  cursor-pointer">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="signin-btn">
          <SecondaryBtn>Sign Up</SecondaryBtn>
          <PrimaryBtn>Sign In</PrimaryBtn>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
