import React from "react";
import "./Hero.css";
import { PrimaryBtn } from "../Btns/primaryBtn";
import { FaHeartbeat } from "react-icons/fa";
import { TbAmbulance } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";

function Hero({ id }) {
  return (
    <div id={id} className="hero">
      <div className="hero-container flex flex-col lg:flex-row justify-between my-[30px] gap-[40px]  sm:my-[30px] lg:my-[100px] md:my-[30px]  items-center justify-center">
        <div className="hero-left flex flex-col items-center mx-[30px]  sm:mx-[50px] md:mx-[80px] lg:mx-[100px] xl:mx-[100px] sm:my-[20px] md:my-[20px] md:flex md:flex md:flex-col md:items-center md:justify-center lg:items-start">
          <h1 className="hero-h1 text-black font-semibold text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:texy-[60px] 2xl:text-[60px]">
            Your Health- <br />
            <span className="hero-h1 text-primary-500 font-semibold">
              Is Our Mission.
            </span>
          </h1>
          <p className="max-w-[500px] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[20px] text-font-dark font-poppins mb-[20px]">
            We are here to take care of your health and provide quality medical.
            Trust the professional for well being.
          </p>
          <PrimaryBtn>Online Appointment</PrimaryBtn>
        </div>
        <div className="hero-right">
          <img width={500} height={500} src="doctor.png" alt="" />
        </div>
      </div>
      <div className="facilities-container">
        <div className="facilities">
          <div className="facility">
            <div className="icon-container">
              {" "}
              <FaHeartbeat className="facility-icon" />
            </div>

            <h1 className="facility-h1">Take Appointment</h1>
            <div className="line">
              <hr />
            </div>
            <p className="facility-p">
              We have the best cardiologists in town to take care of your heart.
            </p>
          </div>
          <div className="facility">
            <div className="icon-container">
              {" "}
              <TbAmbulance className="facility-icon" />
            </div>

            <h1 className="facility-h1">Emergency</h1>
            <div className="line">
              <hr />
            </div>

            <p className="facility-p">
              We provide emergency services 24/7. Our ambulance is always ready
              to serve you.
            </p>
          </div>
          <div className="facility">
            <div className="icon-container">
              {" "}
              <FaUserDoctor className="facility-icon" />`
            </div>

            <h1 className="facility-h1">Qualified Doctors</h1>
            <div className="line">
              <hr />
            </div>

            <p className="facility-p">
              Our doctors are highly qualified and experienced. They are here to
              take care of you.
            </p>
          </div>
        </div>
      </div>
      <div className="subStats">
        <div className="subStats-container">
          <div className="subStat-left">
            <h3> EMedical the you want it. Simple, Convenient and Reliable.</h3>
          </div>
          <div className="subStat-right">
            <div className="subStat">
              <h3 className="subStat-h3">10+</h3>
              <p className="subStat-p">Years of Experience</p>
            </div>
            <div className="subStat">
              <h3 className="subStat-h3">100+</h3>
              <p className="subStat-p">Qualified Doctors</p>
            </div>
            <div className="subStat">
              <h3 className="subStat-h3">1000+</h3>
              <p className="subStat-p">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
