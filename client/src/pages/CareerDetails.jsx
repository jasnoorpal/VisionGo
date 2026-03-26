import React from "react";
import { useParams } from "react-router-dom";
import { careerDetail } from "../assets/careers";

const CareerDetails = () => {
  const { id } = useParams();

  const career = careerDetail;

  if (!career) return <div>Career not found</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold">{career.title}</h1>
      <p className="text-gray-600 mt-2">{career.description}</p>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Skills You'll Gain</h2>
        <div className="flex gap-2 mt-2 flex-wrap">
          {career.skillsYouWillGain.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Modules */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Modules</h2>

        {career.modules.map((module) => (
          <div
            key={module._id}
            className="border p-4 rounded-lg mt-4 shadow-sm"
          >
            <h3 className="text-lg font-bold">{module.title}</h3>
            <p className="text-gray-500">{module.description}</p>

            {/* Steps */}
            <div className="mt-3">
              {module.steps.map((step) => (
                <div
                  key={step._id}
                  className="flex justify-between p-2 border-b"
                >
                  <span>{step.title}</span>
                  <span className="text-sm text-gray-400">{step.type}</span>
                </div>
              ))}
            </div>

            {/* Certificate */}
            {module.certificateAvailable && (
              <div className="mt-3 text-green-600 text-sm">
                🎓 Certificate Available
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerDetails;
