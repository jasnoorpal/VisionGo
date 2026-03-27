import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { careerDetails } from "../assets/careers";

const LearningPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const career = careerDetails.find((c) => c._id === id);

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  // 🔹 Load progress
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`progress_${id}`);

    if (saved) {
      const data = JSON.parse(saved);

      setCurrentModuleIndex(data.currentModuleIndex);
      setCurrentStepIndex(data.currentStepIndex);
      setCompletedSteps(data.completedSteps);
    }

    setIsLoaded(true);
  }, [id]);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      `progress_${id}`,
      JSON.stringify({
        currentModuleIndex,
        currentStepIndex,
        completedSteps,
      })
    );
  }, [currentModuleIndex, currentStepIndex, completedSteps, isLoaded, id]);

  if (!career) return <div>Career not found</div>;

  const module = career.modules[currentModuleIndex];
  const step = module?.steps[currentStepIndex];

  const getEmbedUrl = (url) => url?.replace("watch?v=", "embed/");

  const handleNext = () => {
    const stepId = step._id;

    setCompletedSteps((prev) => {
      if (prev.includes(stepId)) return prev;
      return [...prev, stepId];
    });

    // Move forward
    if (currentStepIndex < module.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (currentModuleIndex < career.modules.length - 1) {
      setCurrentModuleIndex((prev) => prev + 1);
      setCurrentStepIndex(0);
    } else {
      alert("🎉 Career Completed!");
    }
  };

  const handleBack = () => {
    const confirmLeave = window.confirm(
      "Are you sure you want to exit learning?"
    );
    if (confirmLeave) navigate("/dashboard");
  };

  // 📊 Progress %
  const totalSteps = career.modules.reduce((acc, m) => acc + m.steps.length, 0);

  const progress = Math.round((completedSteps.length / totalSteps) * 100);

  return (
    <div className="flex h-screen">
      {/* 🔹 Sidebar */}
      <div className="w-64 bg-white border-r p-4 overflow-y-auto">
        <button
          onClick={handleBack}
          className="mb-4 text-red-500 font-semibold"
        >
          ← Back
        </button>

        <h2 className="text-lg font-bold mb-2">Modules</h2>

        {career.modules.map((mod, mIndex) => (
          <div key={mod._id} className="mb-3">
            <h3 className="font-semibold">{mod.title}</h3>

            {mod.steps.map((s, sIndex) => {
              const isActive =
                mIndex === currentModuleIndex && sIndex === currentStepIndex;

              const isCompleted = completedSteps.includes(s._id);

              return (
                <div
                  key={s._id}
                  onClick={() => {
                    setCurrentModuleIndex(mIndex);
                    setCurrentStepIndex(sIndex);
                  }}
                  className={`text-sm p-1 ml-2 cursor-pointer rounded ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : isCompleted
                      ? "text-green-600"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {s.title}
                </div>
              );
            })}
          </div>
        ))}

        {/* Progress */}
        <div className="mt-4">
          <p className="text-sm font-semibold">Progress: {progress}%</p>
          <div className="w-full bg-gray-200 h-2 rounded mt-1">
            <div
              className="bg-blue-500 h-2 rounded"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">{career.title}</h1>

        <h2 className="text-xl font-semibold">{module.title}</h2>
        <p className="text-gray-600 mb-4">{step.title}</p>

        {/* Video / Code */}
        {step.resources?.length > 0 &&
          (step.resources[0].type === "video" ? (
            <iframe
              className="w-full h-[500px] rounded-lg"
              src={getEmbedUrl(step.resources[0].url)}
              title="Video"
              allowFullScreen
            />
          ) : step.resources[0].type === "code" ? (
            <iframe
              className="w-full h-[70vh] rounded-lg border"
              srcDoc={`
                <html>
                  <head>
                    <style>${step.resources[0].css}</style>
                  </head>
                  <body>${step.resources[0].html}</body>
                </html>`}
              title="Code Preview"
            />
          ) : null)}

        {/* Button */}
        <button
          onClick={handleNext}
          disabled={completedSteps.includes(step._id)}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {completedSteps.includes(step._id)
            ? "✅ Completed"
            : "✅ Mark as Complete"}
        </button>
      </div>
    </div>
  );
};

export default LearningPage;
