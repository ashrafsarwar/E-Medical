import React from "react";

function Contact({ id }) {
  return (
    <div id={id} className="contact ">
      <div className="contact-container flex flex-col items-center my-[100px] md:flex-col lg:flex-row xl-flex-row">
        <div className="contact-left">
          <div className="image-conatiner w-[100vw] h-[300px] sm:h-[400px] md:h-[400px] lg:h-[600px] lg:w-[600px] xl:w-[700px] xl:w-[700px]">
            <img
              src="https://lifesciences.transperfect.com/sites/default/files/styles/1000x800_aspect_webp/public/2023-05/medical_writing_new.jpg.webp?itok=LCUtrkaz"
              alt=""
              className="w-full h-full object-cover overflow-hidden"
            />
          </div>
        </div>
        <div className="contact-right relative overflow-hidden bg-primary w-full flex items-center h-[450px] sm:h-[400px] md:h-[400px] lg:h-[600px] justify-center lg:justify-start xl:justify-start">
          <div class="absolute right-[-200px] top-[-200px] md:right-[-150px] md:top-[-150px] lg:right-[-150px] lg:top-[-150px] w-[350px] h-[350px] rounded-full bg-white opacity-20"></div>
          <div className="contact-content flex flex-col gap-[10px] items-start md:justify-center  sm:px-[20px] sm:py-[20px] md:px-[40px] md:py-[40px] lg:px-[50px] lg:py-[50px] xl:px-[50px] xl:py-[50px]">
            <p className="border-[2px] border-white text-white font-semibold px-[10px] py-[5px] rounded-[5px] ">
              Get In Touch
            </p>
            <h1 className="text-[25px] max-w-[300px] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] text-white md:text-[25px] lg:text-[30px] font-semibold">
              Do You Have Any Questions?
            </h1>
            <div className="contact-inputs flex flex-col ">
              <div className="flex gap-[20px] my-[5px] w-[340px] sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[500px]">
                <input
                  className="flex flex-grow py-[5px] w-full px-[10px] bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
                  type="text"
                  name="name"
                  placeholder="Name"
                />

                <input
                  className="flex flex-grow py-[5px] w-full px-[10px] bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-[20px] my-[5px] w-[340px] sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[500px]">
                <input
                  className="flex flex-grow py-[5px] px-[10px] w-full bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
                <input
                  className="flex flex-grow py-[5px] px-[10px] w-full bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="flex gap-[20px] my-[5px] w-[340px] sm:w-[400px] md:w-[500px] lg:w-[400px] xl:w-[500px] ">
                <textarea
                  className="flex flex-grow  py-[5px] px-[10px] w-full bg-white bg-opacity-30 text-white placeholder-white border border-white rounded-md outline-none focus:ring-2 focus:ring-white transition duration-300 ease-in-out"
                  rows="3"
                  type="text"
                  name="message"
                  placeholder="Message"
                />
              </div>
            </div>
            <button className="contact-btn bg-white text-font-dark-2 py-[8px] px-[20px] rounded-md font-semibold text-[16px]  hover:opacity-90 transition-opacity ease-in-out duration-300 ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
