import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import Icon from "../../Components/Icon/Icon.jsx";
import { useAppContext } from "../../ContextApi.jsx";

function Services({ id }) {
  const { data } = useAppContext();
  const services = data;
  const [hoverState, setHoverState] = React.useState(true);

  return (
    <div id={id} className="services">
      <div className="services-container my-[50px] mx-[10px]">
        <div className="services-headings my-[50px] flex flex-col justify-center items-center gap-[10px] rounded-[5px] ">
          <p className="border-[2px] border-primary text-primary font-semibold px-[10px] py-[5px] rounded-[5px] ">
            Our services
          </p>
          <h1 className="text-[30px] md:text-[40px] lg:text-[45px] font-semibold ">
            Our Services
          </h1>
          <p className="text-center text-[14px] md:text-[16px] max-w-[300px] text-font-dark-2 md:max-w-[400] lg:max-w-[500px]">
            We offer comprehensive medical care to address a wide range of
            health needs.
          </p>
        </div>
        <div className="services-list flex flex-wrap justify-center gap-y-[10px] gap-[40px]">
          {Object.values(services).map((service) => (
            <Link
              to="/services/department"
              state={{
                id: service.id,
                // title: service.title,
                // description: service.description,
                // image: service.image,
                // about: service.about,
                // treatments: service.treatments,
                // team: service.team,
                // links: service?.links || [],
              }}
            >
              <div
                key={service.id}
                className={`service w-[300px] h-[360px] p-[10px] md:h-[400px] lg:h-[400px] xl:h-[400px] flex flex-col gap-[20px] items-center rounded-[10px] shadow-lg hover:shadow-2xl transition-all duration-700 ease-in-out cursor-pointer relative overflow-hidden `}
                onMouseEnter={() => setHoverState(service.id)}
                onMouseLeave={() => setHoverState(null)}
              >
                {hoverState === service.id ? (
                  <div className="service-container w-full h-full flex flex-col gap-[20px] bg-white items-center justify-center shadow-lg transition-all duration-700 ease-in-out relative overflow-hidden">
                    <div className="service-image w-full h-full absolute top-0 left-0 z-0 transition-opacity duration-300 ease-in-out">
                      <img
                        className="rounded-[10px] w-full h-full object-cover"
                        src={service.hoverImage}
                        alt={service.title}
                      />
                    </div>
                    <div className="service-content flex flex-col gap-[20px] items-center justify-center mx-[15px] relative z-10">
                      <div className="icon-container w-[50px] h-[50px] bg-primary rounded-full border-[2px] border-white flex justify-center items-center">
                        <div className="service-icon text-white text-[20px]">
                          <Icon Icon={service.icon} />
                        </div>
                      </div>
                      <h2 className="text-[22px] font-semibold text-white">
                        {service.title}
                      </h2>
                      <p className="text-center text-[12px] font-light md:text-[16px] max-w-[300px] text-white md:max-w-[400px] lg:max-w-[500px]">
                        {service.description}
                      </p>
                      <div className="arrow-icon mt-[20px] text-white text-[20px]">
                        →
                      </div>
                    </div>
                    <div className="service-overlay absolute inset-0 bg-black active:bg-primary opacity-60 rounded-[10px] transition-opacity duration-300 ease-in-out hover:opacity-50"></div>
                  </div>
                ) : (
                  <div className="service-container flex flex-col gap-[20px] bg-white items-center justify-center transition-all duration-300 ease-in-out relative overflow-hidden">
                    <div className="service-image">
                      <img
                        className="rounded-[5px] w-[300px] h-[150px] object-cover"
                        src={service.image}
                        alt={service.title}
                      />
                    </div>
                    <div className="service-content flex flex-col gap-[10px] items-center justify-center mt-[-45px]">
                      <div className="icon-container w-[50px] h-[50px] bg-primary rounded-full border-[2px] border-white flex justify-center items-center">
                        <div className="service-icon text-white text-[20px]">
                          <Icon Icon={service.icon} />
                        </div>
                      </div>
                      <h2 className="text-[22px] font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-center text-[14px] md:text-[16px] max-w-[300px] text-font-dark-2 md:max-w-[400px] lg:max-w-[500px]">
                        {service.description}
                      </p>
                      <div className="service-hover">
                        <img
                          className="w-full h-full object-cover hidden"
                          src={service.hoverImage}
                          alt={service.title}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
