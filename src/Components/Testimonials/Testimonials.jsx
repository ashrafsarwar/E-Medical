import React from "react";
import { PrimaryBtn } from "../Btns/primaryBtn";
import { LiaQuoteLeftSolid } from "react-icons/lia";

const Reviews = [
  {
    id: "1",
    name: "Emily Smith",
    designation: "Father of Patient",
    review:
      "The doctors and staff were incredibly attentive and compassionate. They provided excellent care!",
    image:
      "https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg",
  },
  {
    id: "2",
    name: "Dr. Michael Brown",
    designation: "Medical Director, Wellness Clinic",
    review:
      "Exceptional service and advanced medical facilities. I was impressed with professionalism.",
    image:
      "https://as1.ftcdn.net/v2/jpg/01/32/94/46/1000_F_132944601_TzKWWNgwnBBsShz9UwWiUjTpoydpB5cV.jpg",
  },
];

function Testimonials({ id }) {
  return (
    <div id={id} className="testimonials ">
      <div className="testimonials-container flex flex-col lg:flex-row justify-between items-center md:gap-[20px] lg:gap-[30px] xl:gap-[40px] mx-[10px] md:mx-[40px] flex-col lg:mx-[100px] ">
        <div className="testimonials-left">
          <div className="services-headings my-[50px] flex flex-col items-center lg:items-start gap-[20px] rounded-[5px] ">
            <p className="border-[2px] border-primary text-primary font-semibold px-[10px] py-[5px] rounded-[5px] ">
              Testimonials
            </p>
            <h1 className="text-center text-[30px] md:text-[35px] lg:text-[40px] lg:text-start font-semibold">
              The Honest Reviews From Our Client
            </h1>
            <p className="text-center text-[12px] md:text-[14px] lg:text-[14px] max-w-[400px] text-font-dark-2 md:max-w-[600px] lg:max-w-[400px] lg:text-start">
              Our clients consistently praise our dedication to quality and
              attention to detail, noting how we go above and beyond to meet
              their needs. Their positive feedback reflects their satisfaction
              and trust in our commitment to delivering exceptional results.
            </p>
            <div className="hidden lg:inline-block">
              <PrimaryBtn className="opacity-0 lg:opacity-100 transition-opacity duration-300">
                See All Reviews
              </PrimaryBtn>
            </div>
          </div>
        </div>
        <div className="testimonials-right">
          <div className="testimonials-list flex flex-col gap-[40px] ">
            {Object.values(Reviews).map((review) => (
              <div className="testimonial flex " key={review.id}>
                <div className="qoutes-container">
                  <LiaQuoteLeftSolid className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[50px] text-primary" />
                </div>

                <div className="testimonial-content flex justify-between gap-[20px] shadow-lg  rounded-[5px] active:bg-primary-100">
                  <div className="testimonial-info flex flex-col gap-[10px] md:gap-[20px] lg:gap-[20px] xl:gap-[20px] justify-between p-[10px]">
                    <div>
                      <p className="text-[12px] md:text-[14px] lg:text-[14px] max-w-[400px] text-font-dark-2 md:max-w-[400] lg:max-w-[500px]">
                        {review.review}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-[18px] font-semibold font-poppins md:text-[20px] lg:text-[20px]">
                        {review.name}
                      </h2>
                      <h3 className="text-[12px] text-font-dark-2 font-poppins md:text-[14px] lg:text-[14px]">
                        {review.designation}
                      </h3>
                    </div>
                  </div>
                  <div className="testimonial-image w-[200px] h-auto">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-[200px] h-full object-cover rounded-[5px] "
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="inline-block lg:hidden m-auto">
              <PrimaryBtn className=" lg:opacity-0 transition-opacity duration-300 ">
                See All Reviews
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
