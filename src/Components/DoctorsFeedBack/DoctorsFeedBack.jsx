import React from "react";

const DocotrsFeedback = () => {
  const feedbacks = [
    {
      name: "Alice Johnson",
      date: "2028-07-01",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuptaMgsbCcDiFrEjLLl9Hmg8VnRScdRDj9A&s", // Replace with actual image URLs
      feedback:
        "Dr. Winsbury is very thorough and caring. He took the time to explain my condition and treatment options in detail. I felt very comfortable and well taken care of during my visit.",
    },
    {
      name: "Robert Brown",
      date: "2028-06-25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuptaMgsbCcDiFrEjLLl9Hmg8VnRScdRDj9A&s",
      feedback:
        "Great experience, highly recommend Dr. Winsbury. He is attentive and professional, ensuring that all my questions were answered. His expertise makes him a great doctor.",
    },
    {
      name: "Chance Siphron",
      date: "2028-06-11",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuptaMgsbCcDiFrEjLLl9Hmg8VnRScdRDj9A&s",
      feedback:
        "Dr. Winsbury is efficient, professional, and skilled. He quickly diagnosed my issue, provided a clear treatment plan, and I'm happy with the positive outcome. I highly recommend him.",
    },
    {
      name: "Lincoln Donin",
      date: "2028-05-27",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuptaMgsbCcDiFrEjLLl9Hmg8VnRScdRDj9A&s",
      feedback:
        "Dr. Winsbury is an exceptional physician who combines deep knowledge with genuine care, addressing all concerns and making patients feel understood.",
    },
  ];

  return (
    <div className="py-6 rounded-md ">
      <h2 className="text-xl font-semibold mb-4">Feedback</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="shadow-md bg-white p-4 rounded-lg  border-[1px] border-gray-200  hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-start gap-[10px] mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mr-4 object-cover  border-[1px] border-blueShadesSecondary-400"
              />
              <div>
                <h3 className="text-md font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocotrsFeedback;
