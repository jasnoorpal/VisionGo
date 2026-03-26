import React from "react";
import AllCareersList from "../components/AllCareersList";

const AllCareers = () => {
  return (
    <>
      <h1 className="mt-2 mb-8 font-bold text-2xl text-blue-500 underline">
        All Careers
      </h1>
      <div className="flex flex-wrap flex-start justify-start gap-16">
        <AllCareersList></AllCareersList>
      </div>
    </>
  );
};

export default AllCareers;
