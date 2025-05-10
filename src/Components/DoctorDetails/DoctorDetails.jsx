import React, { useEffect, useState } from "react";
import AcquisitionsChart from "../AcquisitionsChart";
import ScheduleDoctor from "../SheduleDoctor";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import DocotrsFeedback from "../DoctorsFeedBack/DoctorsFeedBack";

function DoctorDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  const { data } = useAppContext();
  const alldoctors = [...data];
  const doctor = alldoctors?.find((doctor) => doctor.id === id) || {};
  console.log(doctor);

  return (
    <div className="department">
      <div className="department-container z-0 ">
        <div className="department-nav-container flex items-start justify-between gap-[20px] mx-[10px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-[40px] my-[10px]">
          <div className="department-nav flex gap-[20px] items-center">
            <div className="cursor-pointer" onClick={() => navigate(-1)}>
              <div className="department-icon-container p-[5px] rounded-[5px] bg-orangeColorLight-500 hover:bg-orangeColorLight-600 transition duration-300">
                <IoArrowBackOutline className=" text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]" />
              </div>
            </div>
            <div className="back-content ">
              <p className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-orangeColorLight-800">
                Back to Doctor Details
              </p>
              <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark-2 font-semibold">
                Doctor Details
              </h2>
            </div>
          </div>
          <div className="department-icons z-0 relative flex gap-[10px] items-start text-font-dark-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px]">
            <div className="department-icon-container p-[5px] rounded-[5px] rounded-[5px] bg-orangeColorLight-500 hover:bg-orangeColorLight-600 transition duration-300 cursor-pointer ">
              <RiSettings3Fill className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]" />
            </div>
            <div className="department-icon-container relative p-[5px] rounded-[5px] rounded-[5px] bg-orangeColorLight-500 hover:bg-orangeColorLight-600 transition duration-300 cursor-pointer">
              <div className="dot absolute right-[7px] h-[6px] w-[6px] md:h-[6px] mg:w-[6px] lg:h-[6px] lg:w-[6px] xl:h-[8px] xl:w-[8px] bg-orange-600 rounded-full"></div>
              <IoNotifications className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]" />
            </div>
            <div className="">
              <div className="relative group">
                {/* Sign In Button */}

                <div className="cursor-pointer flex flex-grow flex-col items-center p-[5px] rounded-[5px] rounded-[5px] bg-orangeColorLight-500 group-hover:bg-orangeColorLight-600 transition duration-300 ">
                  <div className="flex flex-row gap-[10px] items-center justify-between  ">
                    <div>
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-[30px] hidden md:block rounded-[7px]"
                      />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
                        Doctor
                      </h2>
                    </div>
                    <div>
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>

                <div className="absolute z-60 mt-2 w-[130px] bg-orangeColorLight-600 shadow-lg rounded-md opacity-0 transform scale-y-0 origin-top transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-orangeColorLight-500 cursor-pointer">
                      Profile
                    </li>
                    <li className="px-4 py-2 hover:bg-orangeColorLight-500 cursor-pointer">
                      Settings
                    </li>
                    <li className="px-4 py-2 hover:bg-orangeColorLight-500 cursor-pointer">
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Doctor Content Details */}
      <div className="doctor-content flex flex-col xl:flex-row gap-[20px] items-start justify-between m-[10px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-[40px] ">
        <div className="doctor flex flex-col lg:flex-row ">
          <div className="doctor-content  flex-grow h-auto bg-orangeColorLight-500 border-[1px] border-gray-200 rounded-lg rounded-[10px] p-2">
            <div className="doctor-image-conent m-[10px] flex flex-col items-center gap-[10px]">
              <div className="doctor-image">
                <img
                  src={doctor.image}
                  className="w-[200px] h-[200px] rounded-[7px]"
                />
              </div>
              <div className="doctor-info text-center flex flex-col items-center gap-[10px]">
                <div>
                  <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                    Doctor Name
                  </h2>
                  <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                    Doctor Code
                  </p>
                </div>
                <div className="doctor-status rounded-md bg-secondaryColor-200 px-[5px] flex items-center justify-between gap-[5px]">
                  <div>
                    <IoIosCheckmarkCircleOutline className="text-[16px] text-blueShade-700" />
                  </div>
                  <p className="mx-auto text-[10px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[14px] text-blueShades-700 font-normal">
                    Doctor Status
                  </p>
                </div>
              </div>
              <div className="doctor-appointment align-center p-2 ">
                <button className="bg-secondaryColor-200 text-blueShades-700 font-bold p-3 rounded-[5px]">
                  Book Appointment
                </button>
              </div>
            </div>

            <hr className="h-[2px] bg-gray-300" />
            <div className="doctor-specialist-about flex flex-col gap-[10px] p-2 my-[10px]">
              <div className="">
                <p className="text-[14px] xl:text-[14px] text-font-light">
                  Specialist{" "}
                </p>
                <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                  Routine CheckUps
                </p>
              </div>
              <div>
                <p className="text-[14px] xl:text-[14px] text-font-light">
                  About
                </p>
                <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat tempora pariatur sequi praesentium ratione! Molestiae
                  vel quaerat, dolores magnam ipsam aut repellat, tempora
                  perspiciatis cupiditate accusamus animi rerum, possimus modi!
                </p>
              </div>
            </div>
            <hr className="h-[1px] bg-gray-300" />
            <div className="doctor-contacts flex flex-col gap-[10px] p-2 my-[10px]">
              <div className="flex items-center gap-[10px]">
                <div className="p-2 bg-secondaryColor-200 rounded-[5px] text-blueShades-700">
                  <FaPhoneAlt />
                </div>
                <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                  +234 123 456 7890
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="p-2 bg-secondaryColor-200 rounded-[5px] text-blueShades-700">
                  <MdMailOutline />
                </div>
                <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                  Email
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="p-2 bg-secondaryColor-200 rounded-[5px] text-blueShades-700">
                  <FiHome />
                </div>
                <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                  Home Address
                </p>
              </div>
            </div>

            <hr />
            <div className="doctor-education my-[10px]">
              <div className="expreinces-heading ">
                <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                  Work Experience
                </h2>
              </div>
              <div className="experiences-container flex flex-col gap-[20px] p-2 my-[10px]">
                <div className="doctor-experience flex flex-col  items-start gap-[20px]">
                  <div className="doctor-experience flex gap-[20px] items-center">
                    <div className="experience-icon p-2 bg-secondaryColor-200 rounded-[5px] text-blueShades-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[22px]">
                      <MdOutlineWork />
                    </div>
                    <div>
                      <div className="doctor-experience-name">
                        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark-2 font-semibold">
                          Doctor Name
                        </h2>
                      </div>
                      <div className="doctor-experience-content">
                        <div className="doctor-experience-content-header ">
                          <div>
                            <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                              Hospital Name
                            </p>
                          </div>
                          <div>
                            <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-font-light">
                              2020 - 2021
                            </p>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="doctor-experience flex gap-[20px] items-center">
                    <div className="experience-icon p-2 bg-secondaryColor-200 rounded-[5px] text-blueShades-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[22px]">
                      <MdOutlineWork />
                    </div>
                    <div>
                      <div className="doctor-experience-name">
                        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark-2 font-semibold">
                          Doctor Name
                        </h2>
                      </div>
                      <div className="doctor-experience-content">
                        <div className="doctor-experience-content-header ">
                          <div>
                            <p className="text-[16px] lg:text-[16px] xl:text-[16px] text-font-dark-2 font-normal">
                              Hospital Name
                            </p>
                          </div>
                          <div>
                            <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-font-light">
                              2020 - 2021
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-calender-testimonial flex w-full flex-col gap-[20px] justify-between ">
          <div className="flex flex-col gap-[20px]">
            <div className="stats-calender flex flex-col lg:flex-row items-start justify-between gap-[20px] ">
              <div className="flex flex-col flex-grow gap-[20px] w-full ">
                {/* Cards Section */}

                <div className="flex items-center justify-between gap-[10px] ">
                  <div className=" p-2 bg-white shadow rounded-md flex flex-1 flex-grow items-center  gap-[10px] border-[1px] border-gray-200">
                    <div className="experience-icon p-[5px] bg-secondaryColor-200 rounded-[5px] text-blueShades-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[22px]">
                      <CgProfile />
                    </div>
                    <div>
                      <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-font-light">
                        Total Patients
                      </p>
                      <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] text-font-dark font-semibold">
                        150
                      </h2>
                    </div>
                  </div>

                  <div className=" p-2 bg-white shadow rounded-md flex flex-1 flex-grow items-center gap-[10px] border-[1px] border-gray-200">
                    <div className="experience-icon p-[5px] bg-secondaryColor-200 rounded-[5px] text-blueShades-700 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[22px]">
                      <SlCalender />
                    </div>
                    <div>
                      <p className="text-[12px] sm:text-[12px] md:text-[12px] lg:text-[14px] xl:text-[14px] text-font-light">
                        Total Appointments
                      </p>
                      <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[22px] text-font-dark font-semibold">
                        320
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md  border-[1px] border-gray-200 ">
                  <div className="flex flex-col lg:flex-col ">
                    <div className="graph-head flex items-center justify-between mb-6">
                      <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                        Appointment Stats
                      </h2>

                      <select className="p-2 cursor-pointer flex flex-col items-center gap-[10px] rounded-md outline-none bg-[#193651CC] text-white transition duration-300 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px]">
                        <option
                          value="This Week"
                          className="text-sm sm:text-base"
                        >
                          This Week
                        </option>
                        <option
                          value="This Month"
                          className="text-sm sm:text-base"
                        >
                          This Month
                        </option>
                        <option
                          value="This Year"
                          className="text-sm sm:text-base"
                        >
                          This Year
                        </option>
                      </select>
                    </div>
                    <div className="graph-container xl:min-w-[600px] lg:min-w-[600px]   align-center">
                      <AcquisitionsChart />
                    </div>
                    <div className="flex items-center justify-between mb-6"></div>

                    <div className="flex items-center justify-between gap-[10px] flex-wrap">
                      <div className="p-2 bg-white shadow rounded-md flex flex-1 flex-grow items-center gap-[15px] border-[1px] border-gray-200">
                        <div className="experience-icon flex flex-col items-center justify-center gap-[3px]">
                          <div className="h-[20px] w-[6px] rounded-md bg-secondaryColor-300"></div>
                          <div className="h-[20px] w-[6px] rounded-md bg-blueShades-700"></div>
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-font-light cursor-pointer">
                            Total Appointments
                          </p>
                          <h2 className="text-[12x] sm:text-[14px] md:text-[26px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                            320
                          </h2>
                        </div>
                      </div>
                      <div className="p-2 bg-white shadow rounded-md flex flex-1 flex-grow items-center gap-[15px] border-[1px] border-gray-200">
                        <div className="experience-icon">
                          <div className="h-[40px] w-[6px] rounded-md bg-secondaryColor-300"></div>
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-font-light cursor-pointer">
                            New Patients
                          </p>
                          <h2 className="text-[12x] sm:text-[14px] md:text-[26px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                            320
                          </h2>
                        </div>
                      </div>
                      <div className="p-2 bg-white shadow rounded-md flex flex-1 flex-grow items-center gap-[15px] border-[1px] border-gray-200">
                        <div className="experience-icon">
                          <div className="h-[40px] w-[6px] rounded-md bg-blueShades-700"></div>
                        </div>
                        <div>
                          <p className="text-[10px] sm:text-[10px] md:text-[10px] lg:text-[12px] xl:text-[12px] text-font-light cursor-pointer">
                            Follow-Up Patients
                          </p>
                          <h2 className="text-[12x] sm:text-[14px] md:text-[26px] lg:text-[18px] xl:text-[18px] text-font-dark font-semibold">
                            320
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="calender-schedule w-full">
                <ScheduleDoctor />
              </div>
            </div>
          </div>
          <div className="doctor-testimonial">
            <DocotrsFeedback />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
