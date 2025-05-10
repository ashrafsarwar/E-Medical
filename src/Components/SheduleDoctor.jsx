import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

// Helper function to get the week's dates starting from a specific date
const getWeekDates = (startDate) => {
  const weekDates = Array.from({ length: 6 }).map((_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });
  return weekDates;
};

const ScheduleDoctor = () => {
  const today = new Date();
  const [currentStartDate, setCurrentStartDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  // Define the range of visible dates
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 30);
  const minDate = new Date(today);
  minDate.setDate(today.getDate() - 6);

  const visibleDates = getWeekDates(currentStartDate);

  const schedules = [
    {
      date: visibleDates[0],
      data: [
        {
          name: "Rupert Twinny",
          type: "Routine Check-Up",
          time: "09:00 AM",
          color: "bg-cyan-400",
        },
        {
          name: "Ruth Herdinger",
          type: "Follow-Up Visit",
          time: "10:00 AM",
          color: "bg-cyan-400",
        },
        {
          name: "Caren G. Simpson",
          type: "Routine Check-Up",
          time: "11:00 AM",
          color: "bg-cyan-400",
        },
        {
          name: "Staff Meeting",
          type: "Meeting",
          time: "01:00 PM",
          color: "bg-red-300",
        },
        {
          name: "Administrative Work",
          type: "Task",
          time: "03:00 PM",
          color: "bg-gray-300",
        },
      ],
    },
  ];

  // Filter schedules based on selected date
  const currentSchedules =
    schedules.find(
      (schedule) => schedule.date.toDateString() === selectedDate.toDateString()
    )?.data || [];

  // Handlers for "Next" and "Previous" buttons
  const handleNextDates = () => {
    const nextStartDate = new Date(currentStartDate);
    nextStartDate.setDate(currentStartDate.getDate() + 1);

    if (nextStartDate <= maxDate) {
      setCurrentStartDate(nextStartDate);
    }
  };

  const handlePreviousDates = () => {
    const previousStartDate = new Date(currentStartDate);
    previousStartDate.setDate(currentStartDate.getDate() - 1);

    if (previousStartDate >= minDate) {
      setCurrentStartDate(previousStartDate);
    }
  };

  // Get current month and year
  const currentMonth = currentStartDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const currentYear = currentStartDate.getFullYear();

  return (
    <div className="flex flex-col p-4 bg-white shadow border-[1px] border-gray-200 rounded-[10px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <div className="text-center ">
          <h3 className="text-lg font-semibold">
            {currentMonth} {currentYear}
          </h3>
        </div>
        <IoMdMenu className="text-[18px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]" />
      </div>

      {/* Month and Year Display */}

      {/* Date Navigation */}
      <div className="flex flex-col items-center mb-4 relative z-20">
        <div className="flex justify-between items-center text-sm mb-2 bg-cyan-100 p-2 rounded-lg overflow-x-auto w-full w-fixed">
          <button
            onClick={handlePreviousDates}
            disabled={currentStartDate <= minDate}
          >
            <GrFormPrevious
              className={`text-[22px] lg:text-[22px] xl:text-[24px] transition-all duration-300 ${
                currentStartDate <= minDate ? "text-gray-300" : ""
              }`}
            />
          </button>
          {visibleDates.map((date, index) => {
            const isSelected =
              date.toDateString() === selectedDate.toDateString();
            return (
              <div
                key={index}
                className={`px-2 py-1 rounded text-center cursor-pointer overflow-hidden ${
                  isSelected
                    ? "bg-blueShadesSecondary-400 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <span>
                  {date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <br />
                <span>{date.getDate()}</span>
              </div>
            );
          })}
          <button
            onClick={handleNextDates}
            disabled={currentStartDate >= maxDate}
          >
            <MdNavigateNext
              className={`text-[22px] lg:text-[22px] xl:text-[24px] ${
                currentStartDate >= maxDate ? "text-gray-300" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Schedule List */}
      <div>
        <p className="text-sm text-gray-600 mb-3">
          {currentSchedules.length} schedules today
        </p>
        {currentSchedules.map((schedule, index) => (
          <>
            <div
              key={index}
              className="flex items-center my-4 space-x-3 md:space-x-4"
            >
              <div
                className={`w-2 rounded ${schedule.color}`}
                style={{ height: "40px" }}
              ></div>
              <div className="flex-grow">
                <p className="text-sm font-medium">{schedule.name}</p>
                <p className="text-xs text-gray-500">{schedule.type}</p>
              </div>
              <p className="text-xs text-gray-500">{schedule.time}</p>
            </div>
            <hr className=" bg-gray-200" />
          </>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDoctor;
