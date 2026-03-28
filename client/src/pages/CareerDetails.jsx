import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const CareerDetails = () => {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [progress, setProgress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const careerRes = await API.get(`/careers/${id}`);
        setCareer(careerRes.data.data);

        try {
          const progressRes = await API.get(`/progress/${id}`);
          setProgress(progressRes.data.data);
        } catch (err) {
          setProgress(null);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  if (!career) return <div>Loading...</div>;

  const hasProgress = progress !== null;
  const totalSteps = career.modules.reduce((acc, m) => acc + m.steps.length, 0);
  const completedSteps = hasProgress ? progress.completedSteps.length : 0;
  const progressPercentage = hasProgress
    ? Math.round((completedSteps / totalSteps) * 100)
    : 0;

  return (
    <div>
      <h1 className="text-3xl font-bold">{career.title}</h1>
      <p className="text-gray-600 mt-2">{career.description}</p>

      <div className="mt-4 flex gap-4">
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          📊 {career.difficulty}
        </span>
        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          ⏱️ {career.estimatedDuration}
        </span>
      </div>

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

      {hasProgress && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Your Progress</h2>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-sm mt-2">
            {completedSteps} / {totalSteps} steps completed (
            {progressPercentage}%)
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Last updated: {new Date(progress.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Modules</h2>

        {career.modules.map((module, moduleIndex) => {
          const isLocked =
            moduleIndex > 0 &&
            hasProgress &&
            !career.modules[moduleIndex - 1].steps.every((step) =>
              progress.completedSteps.includes(step._id)
            );

          return (
            <div
              key={module._id}
              className={`border p-4 rounded-lg mt-4 shadow-sm ${
                isLocked ? "opacity-60" : ""
              }`}
            >
              <h3 className="text-lg font-bold">{module.title}</h3>
              <p className="text-gray-500">{module.description}</p>
              <p className="text-sm text-gray-400 mt-1">⏱️ {module.duration}</p>

              <div className="mt-3">
                {module.steps.map((step) => {
                  const isCompleted =
                    hasProgress && progress.completedSteps.includes(step._id);

                  return (
                    <div
                      key={step._id}
                      className="flex justify-between p-2 border-b"
                    >
                      <span className={isCompleted ? "text-green-600" : ""}>
                        {isCompleted && "✓ "}
                        {step.title}
                      </span>
                      <span className="text-sm text-gray-400">{step.type}</span>
                    </div>
                  );
                })}
              </div>

              {module.certificateAvailable && (
                <div className="mt-3 text-green-600 text-sm">
                  🎓 Certificate Available
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => navigate(`/learn/${career._id}`)}
        className="bg-green-500 text-white px-6 py-3 rounded-lg mt-6 hover:bg-green-600 transition-all"
      >
        {hasProgress ? "🚀 Continue Learning" : "🚀 Start Learning"}
      </button>
    </div>
  );
};

export default CareerDetails;
