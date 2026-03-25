import React from "react";

const Card = ({ children, icon, heading, definition }) => {
  if (children) {
    return children;
  } else {
    return (
      <div className="flex flex-col p-8 items-start justify-start gap-4 bg-white w-90 h-80 rounded-3xl shadow-lg hover:shadow-xl transition ease-in">
        <div className="h-20 w-20 bg-blue-100 rounded-2xl text-blue-600 flex items-center justify-center">
          {icon}
        </div>
        <div className="font-bold text-[1.4rem]">{heading}</div>
        <div className="text-[1.1rem] text-gray-500">{definition}</div>
      </div>
    );
  }
};

export default Card;
