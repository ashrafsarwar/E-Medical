import React from "react";

function Footer({ id }) {
  return (
    <div
      id={id}
      className="footer bg-primary p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]"
    >
      <div className="footer-container flex flex-col justify-between items-center gap-[30px] lg:flex-row gap-[50px]">
        <div className="info-section">
          <div className="footer-logo text-white font-light flex flex-col gap-[10px] mt-[5px]">
            <div className="footer-logo-sub-section w-[90vw] md:w-[80vw] lg:w-[20vw] flex justify-between items-start gap-[20px] mx-auto lg:flex-col xl:mt-[-20px] ">
              <img
                src="footer.png"
                alt=""
                className="w-[120px] h-[25px] sm:w-[150px] sm:h-[40px] md:w-[170px] md:h-[40px] lg:w-[200px] h-[50px] text-white"
              />
              <p className="ml-[7px] max-w-[350px] text-[14px] mt-[7px] sm:mt-[0px] md:mt-[0px] lg:mt-[0px] xl:mt-[0px]">
                EMedical is the administrative support entity and all clinical
                services.
              </p>
            </div>
            <p className="ml-[7px] mt-[-20px] sm:mt-[-10px] md:mt-[-10px] lg:mt-[-10px] xl:mt-[-10px]">
              +68 320 54673
            </p>
          </div>
        </div>
        <div className="footer-links-container w-[90vw] md:w-[80vw] flex justify-between items-center gap-[30px] lg:flex-row text-white font-light">
          <div className="footer-links flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[24px] font-semibold">
              About Company
            </h2>
            <ul>
              <li>Company</li>
              <li>Find a Doctor</li>
              <li>Our Services</li>
              <li>Plans & Prices</li>
            </ul>
          </div>
          <div className="footer-links flex flex-col gap-[10px]">
            <h2 className="text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[24px] font-semibold">
              Help & Support
            </h2>
            <ul>
              <li>Consultation</li>
              <li>White Label</li>
              <li>Sign In</li>
              <li>Appointment</li>
            </ul>
          </div>
        </div>
        <div className="footer-subscription flex flex-col gap-[10px] w-[90vw] md:w-[80vw]">
          <h2 className="text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[24px] font-semibold text-white">
            Subscribe Our Newsletter!
          </h2>
          <div className="input-container">
            <input
              className="flex flex-grow py-[5px] w-full px-[10px] bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
              type="email"
              name="email"
              placeholder="Enter Your Email"
            />{" "}
            <button className="contact-btn w-full bg-white text-font-dark-2 py-[8px] px-[20px] my-[10px] rounded-md font-semibold text-[16px] hover:opacity-90 transition-opacity ease-in-out duration-300  ">
              Subscribe Now
            </button>{" "}
          </div>
        </div>
      </div>
      <div className="footer-line mt-[50px]">
        <hr className="h-[1px] bg-white w-full" />
        <p className="text-white font-300 text-center mt-[10px]">
          © 2024 EMedical. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
