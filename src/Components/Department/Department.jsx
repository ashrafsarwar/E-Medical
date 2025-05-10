import React, { useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../ContextApi";

function Department() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};
  const { data } = useAppContext();
  const allDepartments = [...data];
  const department =
    allDepartments?.find((department) => department.id === id) || {};
  const { title, image, about, treatments, team } = department;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="department ">
      <div className="department-container flex flex-col gap-[20px] mx-[20px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-[40px] my-[20px]">
        <div className="department-nav flex gap-[20px] items-center">
          <div className="cursor-pointer" onClick={() => navigate(-1)}>
            <div className="department-icon-container p-[5px] rounded-[5px] bg-orangeColorLight-500 hover:bg-orangeColorLight-600 transition duration-300">
              <IoArrowBackOutline className=" text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]" />
            </div>
          </div>
          <div className="back-content ">
            <p className="text-[10px] sm:text-[12px] md:text-[12px] lg:text-[12px] xl:text-[12px] text-orangeColorLight-800">
              Back to Services
            </p>
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] text-font-dark-2 font-semibold">
              Department Details
            </h2>
          </div>
        </div>
        <div className="image-container w-full h-[180px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] rounded-[20px]">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover overflow-hidden rounded-md"
          />
        </div>
        <div className="department-headings flex justify-between items-center">
          <div className="heading-container flex gap-[5px] items-center">
            <h1 className="text-[20px] sm:text-[20px] md:text[22px] lg:text-[24px] xl:text-[24px] text-font-dark-2 font-semibold">
              {title}
            </h1>
            <div className="heading-icon flex justify-center align-center align-auto justify-center w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[30px] md:h-[30px] bg-primaryColor-300 rounded-full ">
              <RiArrowDropDownLine className="m-auto text-white text-[22px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[26px]" />
            </div>
          </div>
          <div className="teams flex items-center gap-[10px]">
            <div className="teams-images-conatainer flex items-center ">
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px] text-font-dark-2 mr-[5px]">
                Team:{" "}
              </p>
              <div className="flex -space-x-1 sm:-space-x-1 md:-space-x-2 lg:-space-x-2 xl:-space-x-2 ">
                {Object.values(team).map((team1) => {
                  return (
                    <div
                      key={team1.id}
                      className="w-[20px] h-[20px] sm:w-[24px] md:w-[30px] lg:w-[40px] xl:w-[40px] sm:h-[24px] md:h-[30px] lg:h-[40px] xl:h-[40px]  rounded-full "
                    >
                      <img
                        src={team1.image}
                        alt=""
                        className="h-full w-full rounded-full border-[1px] sm:border-[1px] md:border-[2px] lg:border-[2px] xl:border-[2px] border-primary object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[16px]  text-font-dark-2">
                +7 others
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <h2 className="text-[24px] sm:text-[24px] md:text-[26px] lg:text-[30px] xl:text-[30px] text-gray-400  ">
            About
          </h2>
          <p className="text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[20px] text-font-dark">
            {about}
          </p>
        </div>
        <div className="treatments">
          <h2 className="text-[24px] sm:text-[24px] md:text-[26px] lg:text-[30px] xl:text-[30px] text-gray-400    ">
            Treatments
          </h2>
          <div className="treatments-container flex flex-col gap-[10px]">
            {Object.values(treatments).map((treatment) => {
              return (
                <div key={treatment.id}>
                  <div className="flex gap-[10px]">
                    <div className="dot w-[12px] h-[10px] sm:w-[12px] md:w-[15px] lg:w-[15px] xl:w-[15px] sm:h-[10px] md:h-[15px] lg:h-[15px] bg-white rounded-full border-[3px] md:border-[4px] lg:border-[4px] lg:border-[4px] border-primaryColor-500 mt-[7px]"></div>
                    <div>
                      <h3 className="text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] xl:text-[22px] text-font-dark font-semibold">
                        {treatment.title}
                      </h3>
                      <p className="text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] xl:text-[20px] text-font-dark">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="outTeam">
          <h2 className="text-[24px] sm:text-[24px] md:text-[26px] lg:text-[30px] xl:text-[30px] text-gray-400 ">
            Our Team
          </h2>
          <div className="team-container flex flex-wrap justify-center items-center gap-y-[20px] gap-[10px] sm:gap-[20px] md:gap-[30px] lg:gap-[30px] xl:gap-[30px] my-[20px]">
            {Object.values(team).map((team1) => {
              return (
                <Link
                  to="/services/doctor"
                  state={{
                    id: team1.id,
                  }}
                >
                  <div
                    key={team1.id}
                    className="w-[150px] h-[240px] sm:w-[150px] sm:h-[250px] md:w-[170px] md:h-[260px] lg:w-[200px] lg:h-[290px] xl:w-[200px] xl:h-[290px] text-center bg-orangeColorLight-300 p-[10px] rounded-[5px] flex flex-col items-center justify-between gap-[10px] hover:shadow-lg cursor-pointer active:bg-orangeColorLight-600 pb-[20px]"
                  >
                    <img
                      src={team1.image}
                      alt=""
                      className="w-[140px] h-[130px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[130px] lg:w-[180px] lg:h-[150px] xl:w-[180px] xl:h-[150px]  rounded-[5px] object-cover overflow-hidden"
                    />
                    <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-font-dark-2 hover:text-orangeColorLight-900 transition duration-300 font-semibold">
                      {team1.name}
                    </h3>
                    <p className="text-[10px] sm:text-[10px] md:text-[12px] lg:text-[14px] text-font-dark-2 hover:text-orangeColorLight-900 transition duration-300">
                      {team1.title}
                    </p>
                    <ul className="icons-team text-font-dark-2 text-[20px] flex items-center gap-[15px] ">
                      <li className="cursor-pointer hover:translate-y-[-3px] transition duration-300">
                        <a href="https://www.linkedin.com/">
                          <TbBrandLinkedin className="text-[12px] sm:text-[14px] hover:text-orangeColorLight-900  transition duration-300 md:text-[16px] lg:text-[18px] xl:text-[18px]" />
                        </a>
                      </li>
                      <li className="cursor-pointer hover:translate-y-[-3px] transition duration-300">
                        <a href="https://www.twitter.com/">
                          <RiTwitterXLine className="text-[12px] sm:text-[14px] hover:text-orangeColorLight-900  transition duration-300 md:text-[16px] lg:text-[18px] xl:text-[18px]" />
                        </a>
                      </li>
                      <li className="cursor-pointer hover:translate-y-[-3px] transition duration-300">
                        <a href="https://www.instagram.com/">
                          <FaInstagram className="text-[12px] sm:text-[14px] hover:text-orangeColorLight-900  transition duration-300 md:text-[16px] lg:text-[18px] xl:text-[18px]" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="department-footer flex flex-col sm:fex-row md:flex-row lg:flex-row xl:flex-row gap-[20px] justify-between items-center">
          <div className="flex items-center gap-[20px]">
            <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-font-dark-2">
              {" "}
              © 2024 EMedical. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-[30px]">
            <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-font-light hover:text-orangeColorLight-900 transition duration-300 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-font-light hover:text-orangeColorLight-900 transition duration-300 cursor-pointer">
              Terms of Service
            </p>
          </div>
          <ul className="icons-team text-font-dark-2 text-[20px] flex items-center gap-[15px] ">
            <li className="cursor-pointer hover:translate-y-[-3px] text-[26px] hover:text-orangeColorLight-900  transition duration-300">
              <a href="https://www.linkedin.com/">
                <TbBrandLinkedin />
              </a>
            </li>
            <li className="cursor-pointer hover:translate-y-[-3px] text-[26px] hover:text-orangeColorLight-900  transition duration-300">
              <a href="https://www.twitter.com/">
                <RiTwitterXLine />
              </a>
            </li>
            <li className="cursor-pointer hover:translate-y-[-3px] text-[26px] hover:text-orangeColorLight-900  transition duration-300">
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Department;
