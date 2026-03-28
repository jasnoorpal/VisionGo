import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

const LearningPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [career, setCareer] = useState(null);
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const careerRes = await API.get(`/careers/${id}`);
        setCareer(careerRes.data.data);

        try {
          const progressRes = await API.get(`/progress/${id}`);
          const progressData = progressRes.data.data;
          setProgress(progressData);
          setCurrentModuleIndex(progressData.currentModuleIndex);
          setCurrentStepIndex(progressData.currentStepIndex);
          setCompletedSteps(progressData.completedSteps);
        } catch (err) {
          if (err.response?.status === 404) {
            const newProgress = {
              careerId: id,
              completedSteps: [],
              currentModuleIndex: 0,
              currentStepIndex: 0,
              startedAt: new Date().toISOString(),
            };
            setProgress(newProgress);
          } else {
            throw err;
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const saveProgressToBackend = async (updatedProgress) => {
    if (saving) return;

    try {
      setSaving(true);
      console.log("Saving progress:", {
        careerId: id,
        ...updatedProgress,
      });

      const response = await API.post("/progress", {
        careerId: id,
        ...updatedProgress,
      });

      console.log("Save progress response:", response.data);
    } catch (err) {
      console.error("Error saving progress:", err);
      console.error("Error details:", err.response?.data);
    } finally {
      setSaving(false);
    }
  };

  const handleCompleteStep = async () => {
    const currentStep =
      career.modules[currentModuleIndex].steps[currentStepIndex];
    const stepId = currentStep._id;

    if (completedSteps.includes(stepId)) {
      moveToNextStep();
      return;
    }

    const newCompletedSteps = [...completedSteps, stepId];

    setCompletedSteps(newCompletedSteps);

    await saveProgressToBackend({
      completedSteps: newCompletedSteps,
      currentModuleIndex: currentModuleIndex,
      currentStepIndex: currentStepIndex,
      lastUpdated: new Date().toISOString(),
    });

    moveToNextStep();
  };

  const moveToNextStep = () => {
    let newModuleIndex = currentModuleIndex;
    let newStepIndex = currentStepIndex;

    const currentModule = career.modules[currentModuleIndex];

    if (currentStepIndex < currentModule.steps.length - 1) {
      newStepIndex = currentStepIndex + 1;
    } else if (currentModuleIndex < career.modules.length - 1) {
      newModuleIndex = currentModuleIndex + 1;
      newStepIndex = 0;
    } else {
      alert("🎉 Congratulations! You've completed this career path! 🎉");
      return;
    }

    setCurrentModuleIndex(newModuleIndex);
    setCurrentStepIndex(newStepIndex);

    saveProgressToBackend({
      completedSteps: completedSteps,
      currentModuleIndex: newModuleIndex,
      currentStepIndex: newStepIndex,
      lastUpdated: new Date().toISOString(),
    });
  };

  const handleNavigateToStep = (moduleIdx, stepIdx) => {
    const targetStep = career.modules[moduleIdx].steps[stepIdx];
    const targetStepId = targetStep._id;

    const isStepAccessible = isStepAccessibleCheck(moduleIdx, stepIdx);

    if (!isStepAccessible) {
      alert("You need to complete previous steps first!");
      return;
    }

    setCurrentModuleIndex(moduleIdx);
    setCurrentStepIndex(stepIdx);

    saveProgressToBackend({
      completedSteps: completedSteps,
      currentModuleIndex: moduleIdx,
      currentStepIndex: stepIdx,
      lastUpdated: new Date().toISOString(),
    });
  };

  const isStepAccessibleCheck = (moduleIdx, stepIdx) => {
    const targetModule = career.modules[moduleIdx];

    if (stepIdx === 0) {
      for (let i = 0; i < moduleIdx; i++) {
        const prevModule = career.modules[i];
        const allStepsCompleted = prevModule.steps.every((step) =>
          completedSteps.includes(step._id)
        );
        if (!allStepsCompleted) return false;
      }
      return true;
    }

    for (let i = 0; i < stepIdx; i++) {
      const prevStep = targetModule.steps[i];
      if (!completedSteps.includes(prevStep._id)) {
        return false;
      }
    }

    return true;
  };

  const handleBack = () => {
    const confirmLeave = window.confirm(
      "Are you sure you want to exit learning?"
    );
    if (confirmLeave) navigate("/dashboard");
  };

  if (loading) return <div>Loading...</div>;
  if (!career) return <div>Career not found</div>;

  const module = career.modules[currentModuleIndex];
  const step = module?.steps[currentStepIndex];

  const getEmbedUrl = (url) => url?.replace("watch?v=", "embed/");

  const totalSteps = career.modules.reduce((acc, m) => acc + m.steps.length, 0);
  const progressPercentage = Math.round(
    (completedSteps.length / totalSteps) * 100
  );

  const isStepCompleted = completedSteps.includes(step?._id);

  const canGoNext = () => {
    if (!step) return false;

    if (!isStepCompleted) return false;

    const currentModule = career.modules[currentModuleIndex];
    if (currentStepIndex < currentModule.steps.length - 1) {
      return true;
    }

    if (currentModuleIndex < career.modules.length - 1) {
      return true;
    }

    return false;
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-white border-r p-4 overflow-y-auto">
        <button
          onClick={handleBack}
          className="mb-4 text-red-500 font-semibold hover:text-red-600"
        >
          ← Exit Learning
        </button>

        <h2 className="text-lg font-bold mb-4">Modules</h2>

        {career.modules.map((mod, mIndex) => {
          const isModuleAccessible = (() => {
            if (mIndex === 0) return true;
            const prevModule = career.modules[mIndex - 1];
            return prevModule.steps.every((step) =>
              completedSteps.includes(step._id)
            );
          })();

          return (
            <div key={mod._id} className="mb-4">
              <h3
                className={`font-semibold ${
                  !isModuleAccessible ? "text-gray-400" : ""
                }`}
              >
                {mod.title}
                {!isModuleAccessible && " 🔒"}
              </h3>

              {mod.steps.map((s, sIndex) => {
                const isActive =
                  mIndex === currentModuleIndex && sIndex === currentStepIndex;
                const isCompleted = completedSteps.includes(s._id);
                const isAccessible = isStepAccessibleCheck(mIndex, sIndex);

                return (
                  <div
                    key={s._id}
                    onClick={() =>
                      isAccessible && handleNavigateToStep(mIndex, sIndex)
                    }
                    className={`text-sm p-2 ml-2 mb-1 cursor-pointer rounded transition-all ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : isCompleted
                        ? "text-green-600 bg-green-50 hover:bg-green-100"
                        : isAccessible
                        ? "hover:bg-gray-100 text-gray-700"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isCompleted && "✓ "}
                    {s.title}
                    {!isAccessible && !isCompleted && " 🔒"}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div className="mt-6 pt-4 border-t">
          <p className="text-sm font-semibold mb-2">
            Overall Progress: {progressPercentage}%
          </p>
          <div className="w-full bg-gray-200 h-2 rounded">
            <div
              className="bg-blue-500 h-2 rounded transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <p>
              {completedSteps.length} / {totalSteps} steps completed
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-2">{career.title}</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {module.title}
        </h2>
        <p className="text-gray-600 mb-6">{step.title}</p>

        {step.resources?.length > 0 && (
          <div className="mb-6">
            {step.resources[0].type === "video" ? (
              <iframe
                className="w-full h-[500px] rounded-lg shadow-lg"
                src={getEmbedUrl(step.resources[0].url)}
                title="Video Lesson"
                allowFullScreen
              />
            ) : step.resources[0].type === "code" ? (
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-2 font-mono text-sm">
                  Code Preview
                </div>
                <iframe
                  className="w-full h-[500px]"
                  srcDoc={`
                    <html>
                      <head>
                        <style>${step.resources[0].css || ""}</style>
                      </head>
                      <body style="padding: 20px;">${
                        step.resources[0].html || ""
                      }</body>
                    </html>
                  `}
                  title="Code Preview"
                  sandbox="allow-same-origin allow-scripts"
                />
              </div>
            ) : null}
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleCompleteStep}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              isStepCompleted
                ? "bg-green-500 text-white cursor-pointer"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isStepCompleted
              ? "✓ Completed - Click to Continue"
              : "✓ Mark as Complete"}
          </button>

          {canGoNext() && (
            <button
              onClick={moveToNextStep}
              className="px-6 py-3 rounded-lg font-semibold bg-purple-500 text-white hover:bg-purple-600 transition-all"
            >
              Next →{" "}
              {currentStepIndex < module.steps.length - 1 ? "Step" : "Module"}
            </button>
          )}
        </div>

        {saving && (
          <p className="text-sm text-gray-500 mt-4">Saving progress...</p>
        )}

        <div className="mt-6 text-sm text-gray-500">
          <p>
            Step {currentStepIndex + 1} of {module.steps.length} in this module
          </p>
          <p className="mt-1">
            {isStepCompleted
              ? "✅ Step completed! Click 'Next' to continue or click on any completed step in sidebar."
              : "📝 Complete this step to unlock the next one."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
