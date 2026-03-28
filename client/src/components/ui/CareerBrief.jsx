import React from "react";

const CareerBrief = ({ thumbnail, heading, description, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="flex flex-col p-8 items-start justify-start gap-4 bg-white w-100 min-h-100 rounded-3xl shadow-lg hover:shadow-xl transition ease-in hover:cursor-pointer"
      >
        <div
          className="h-70 w-full rounded-2xl text-blue-600 flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className="font-bold text-[1.4rem]">{heading}</div>
        <div className="text-[1.1rem] text-gray-500">{description}</div>
      </div>
    </>
  );
};

export default CareerBrief;
