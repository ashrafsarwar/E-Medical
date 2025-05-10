import React from "react";
import "./About.css";
import { PrimaryBtn, TertiaryBtn } from "../../Components/Btns/primaryBtn";
import { FaCheck } from "react-icons/fa6";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaBookBookmark } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";

function About({ id }) {
  return (
    <div id={id}>
      <div className="about my-[100px]">
        <div className="about-1">
          <div className="about-1-container flex flex-col md:flex-row items-center justify-between mx-[20px] my-[50px] gap-[50px] md:mx-[40px] lg:mx-[100px]">
            <div className="about-1-left">
              <img
                src="side-docs.png"
                alt=""
                className="rounded-[5px] w-[400px] h-[200px] sm:w-[500px] sm:h-[400px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[450px] xl:w-[600px] xl:h-[450px]"
              />
            </div>
            <div className="about-1-right">
              <TertiaryBtn className="about-1-btn"> More About Us</TertiaryBtn>
              <h1 className="text-[30px] font-semibold my-[10px] height-[1]">
                The Best Medical <br />
                That You Can Trust
              </h1>
              <p className="about-1-p text-[14px] md:text-[16px] max-w-[500px] text-font-dark-2 my-[10px] lg:max-w-[800px]">
                We are here to take care of your health and provide quality
                medical. Trust the professional for well being.
              </p>
              <p className="about-1-p text-[14px] md:text-[16px] max-w-[500px] text-font-dark-2 my-[10px] lg:max-w-[800px]">
                We are here to take care of your health and provide quality
                medical. Trust the professional for well being.
              </p>
              <div className="option-container flex flex-col gap-[20px] my-[20px]">
                <div className="check-options flex flex-col gap-[20px] md:flex-row ga-p[30px]">
                  <div className="list flex gap-[10px]">
                    <div className="check-container w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center">
                      <FaCheck className="check-icon text-white text-[10px]" />
                    </div>
                    <p className="font-semibold text-[12px]">
                      Modern Equipment
                    </p>
                  </div>
                  <div className="list flex gap-[10px]">
                    <div className="check-container w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center">
                      <FaCheck className="check-icon text-white text-[10px]" />
                    </div>
                    <p className="font-semibold text-[12px]">
                      Easy Online Appointment
                    </p>
                  </div>
                </div>
                <div className="check-options flex flex-col gap-[20px] md:flex-row ga-p[30px]">
                  <div className="list flex gap-[10px]">
                    <div className="check-container w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center">
                      <FaCheck className="check-icon text-white text-[10px]" />
                    </div>
                    <p className="font-semibold text-[12px]">
                      Always Monitering
                    </p>
                  </div>

                  <div className="list flex gap-[10px]">
                    <div className="check-container w-[20px] h-[20px] rounded-full bg-primary flex justify-center items-center">
                      <FaCheck className="check-icon text-white text-[10px]" />
                    </div>
                    <p className="font-semibold text-[12px]">
                      Comfortable Medical
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-1-btn-container flex gap-[30px]">
                <PrimaryBtn className="about-1-btn">Learn More</PrimaryBtn>
                <TertiaryBtn className="about-1-btn">
                  Make Appointment
                </TertiaryBtn>
              </div>
            </div>
          </div>
        </div>
        <div className="about-2">
          <div className="about-2-container flex flex-col md:flex-row items-center justify-between mx-[20px] my-[50px] gap-[50px] md:mx-[40px] lg:mx-[100px]">
            <div className="about-2-left">
              <h1 className="text-[30px] md:text-[35px] lg:text-[50x] font-bold font-roboto">
                Need a Consultaion?
              </h1>
              <p className="my-[20px] text-[14px] md:text-[16px] max-w-[500px] text-font-dark-2 my-[10px] ">
                Choose consultation method that is convenient for you and we
                will contact you as soon as possible.
              </p>
              <div className="options-container my-[30px]">
                <div className="option-group ">
                  <label className="option">
                    <input type="radio" name="contact" value="chat" />
                    <span className="icon">
                      <IoChatboxEllipses />
                    </span>
                    <span className="text">Chat</span>
                  </label>
                  <label className="option">
                    <input type="radio" name="contact" value="phone" />
                    <span className="icon">
                      <IoCall />
                    </span>
                    <span className="text">Phone Call</span>
                  </label>
                </div>
                <div className="option-group ">
                  <label className="option">
                    <input type="radio" name="contact" value="book" />
                    <span className="icon">
                      <FaBookBookmark />
                    </span>
                    <span className="text">Book</span>
                  </label>
                  <label className="option">
                    <input type="radio" name="contact" value="video" />
                    <span className="icon">
                      <FaVideo />
                    </span>
                    <span className="text">Video Call</span>
                  </label>
                </div>
              </div>
              <PrimaryBtn className="about-2-btn">Contact Now</PrimaryBtn>
            </div>
            <div className="about-2-right">
              <img
                src="consult.png"
                alt=""
                className="rounded-[5px] w-[400px] h-[200px] sm:w-[500px] h-[400px] md:w-[500px] md:h-[400px] lg:w-[500px] lg:h-[400px] xl:w-[600px] xl:h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
