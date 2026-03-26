import React from "react";
import { careerList } from "../assets/careers.js";
import CareerBrief from "./ui/CareerBrief.jsx";
import { useNavigate } from "react-router-dom";

const AllCareersList = ({ only }) => {
  const displayedCareers = only ? careerList.slice(0, only) : careerList;
  const navigate = useNavigate();

  return (
    <>
      {displayedCareers.map((career) => {
        return (
          <CareerBrief
            key={career._id}
            icon={career.thumbnail}
            heading={career.title}
            description={career.description}
            onClick={() => navigate(`/careers/${career._id}`)}
          />
        );
      })}
    </>
  );
};

export default AllCareersList;
