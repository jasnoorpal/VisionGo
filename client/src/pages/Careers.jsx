import React from "react";
import { Sparkle } from "lucide-react";
import AllCareersList from "../components/AllCareersList";
import ProgressTracker from "../components/ProgressTracker";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="mb-8">
        <ProgressTracker showTitle={true} />
      </div>

      <div className="h-50 w-full flex gap-8">
        <div className="w-1/2 h-full border border-gray-500 rounded-xl flex items-center justify-center hover:shadow-xl transition ease-in">
          Select your career with AI <Sparkle className="ml-4" color="purple" />
        </div>
        <Link
          to="/careers/all"
          className="w-1/2 h-full border border-gray-500 rounded-xl flex items-center justify-center hover:shadow-xl transition ease-in"
        >
          Select what you want to pursue from the list
        </Link>
      </div>
      <hr className="text-gray-500 text my-4" />
      <div className="w-full">
        <div className="flex p-8 text-2xl underline font-bold">
          Trending Careers
        </div>
        <div className="flex gap-8 w-full justify-evenly flex-wrap">
          <AllCareersList only={3} />
        </div>
      </div>
    </>
  );
};

export default Careers;
