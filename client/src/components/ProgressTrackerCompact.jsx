import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { ChevronRight } from "lucide-react";

const ProgressTrackerCompact = ({ limit = 3, className = "" }) => {
  const navigate = useNavigate();
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInProgressCourses = async () => {
      try {
        const careersRes = await API.get("/careers?includeModules=true");
        const allCareers = careersRes.data.data;

        const progressPromises = allCareers.map(async (career) => {
          try {
            const progressRes = await API.get(`/progress/${career._id}`);
            return { career, progress: progressRes.data.data };
          } catch (err) {
            return null;
          }
        });

        const results = (await Promise.all(progressPromises)).filter(
          (item) => item !== null
        );

        const inProgress = results
          .map(({ career, progress }) => {
            const totalSteps =
              career.modules?.reduce(
                (acc, m) => acc + (m.steps?.length || 0),
                0
              ) || 0;

            const completedSteps = progress.completedSteps?.length || 0;

            if (completedSteps > 0 && completedSteps < totalSteps) {
              return {
                id: career._id,
                title: career.title,
                thumbnail: career.thumbnail || "📚",
                progressPercentage: Math.round(
                  (completedSteps / totalSteps) * 100
                ),
              };
            }
            return null;
          })
          .filter((item) => item !== null)
          .slice(0, limit);

        setInProgressCourses(inProgress);
      } catch (err) {
        console.error("Error fetching in-progress courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInProgressCourses();
  }, [limit]);

  if (loading || inProgressCourses.length === 0) return null;

  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      <div className="p-4 border-b">
        <h3 className="font-semibold text-gray-800">Continue Learning</h3>
        <p className="text-xs text-gray-500 mt-1">Pick up where you left off</p>
      </div>

      <div className="divide-y">
        {inProgressCourses.map((course) => (
          <div
            key={course.id}
            className="p-3 hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => navigate(`/learn/${course.id}`)}
          >
            <div className="flex items-center gap-3">
              <div
                className="text-2xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${course.thumbnail})` }}
              ></div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-800 truncate">
                  {course.title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-500 h-1.5 rounded-full"
                      style={{ width: `${course.progressPercentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {course.progressPercentage}%
                  </span>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 bg-gray-50 rounded-b-lg">
        <button
          onClick={() => navigate("/careers/all")}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium w-full text-center"
        >
          View all courses →
        </button>
      </div>
    </div>
  );
};

export default ProgressTrackerCompact;
