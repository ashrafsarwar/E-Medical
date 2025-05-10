import React from "react";
import "./PrimaryBtn.css";

function PrimaryBtn({ children }) {
  return (
    <button className="primary-btn py-2 text-[12px] px-5 rounded-[5px] sm:text-[12px] px-[15px] py-[6px] md:text-[14px] px-[18px] py-[6px] lg:text-[16] px-[20] py-[8px] font-semibold">
      {children}
    </button>
  );
}

function SecondaryBtn({ children }) {
  return (
    <button className="secondary-btn py-2 text-[12px] px-5 rounded-[5px] sm:text-[12px] px-[15px] py-[6px] md:text-[14px] px-[18px] py-[6px] lg:text-[16] px-[20] py-[8px] border-none font-semibold">
      {children}
    </button>
  );
}

function TertiaryBtn({ children }) {
  return (
    <button className="tertiary-btn py-2 text-[12px] px-5 rounded-[5px] sm:text-[12px] px-[15px] py-[6px] md:text-[14px] px-[18px] py-[6px] lg:text-[16] px-[20] py-[8px] font-semibold">
      {children}
    </button>
  );
}

export { SecondaryBtn, PrimaryBtn, TertiaryBtn };
