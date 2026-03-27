import React from "react";
import AllCareersList from "../components/AllCareersList";
import { careerDetails, careerList } from "../assets/careers";
import { useNavigate } from "react-router-dom";

const AllCareers = () => {
  const navigate = useNavigate();

  const getProgressData = (careerId) => {
    const data = localStorage.getItem(`progress_${careerId}`);
    if (!data) return null;

    return JSON.parse(data);
  };
  return (
    <>
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>

        <div className="flex gap-4 overflow-x-auto">
          {careerList.map((career) => {
            const progressData = getProgressData(career._id);
            if (!progressData) return null;

            // find full career for steps count
            const fullCareer = careerDetails.find((c) => c._id === career._id);

            const totalSteps = fullCareer.modules.reduce(
              (acc, m) => acc + m.steps.length,
              0
            );

            const progress = Math.round(
              (progressData.completedSteps.length / totalSteps) * 100
            );

            return (
              <div
                key={career._id}
                className="min-w-[250px] border p-4 rounded-lg shadow"
              >
                <h3 className="font-semibold">{career.title}</h3>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 h-2 rounded mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <p className="text-sm mt-1">{progress}% completed</p>

                <button
                  onClick={() => navigate(`/learn/${career._id}`)}
                  className="mt-3 bg-green-500 text-white px-3 py-1 rounded"
                >
                  Continue
                </button>
              </div>
            );
          })}
        </div>
      </div>
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
