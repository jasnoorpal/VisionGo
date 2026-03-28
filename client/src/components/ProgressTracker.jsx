import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { BookOpen, TrendingUp, ChevronRight } from "lucide-react";

const ProgressTracker = ({ limit, showTitle = true, className = "" }) => {
  const navigate = useNavigate();
  const [inProgressCourses, setInProgressCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInProgressCourses = async () => {
      try {
        const careersRes = await API.get("/careers?includeModules=true");
        const allCareers = careersRes.data.data;

        if (!allCareers || allCareers.length === 0) {
          setLoading(false);
          return;
        }

        const progressPromises = allCareers.map(async (career) => {
          try {
            const progressRes = await API.get(`/progress/${career._id}`);
            return {
              career,
              progress: progressRes.data.data,
            };
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
                description: career.description,
                progress: {
                  percentage: Math.round((completedSteps / totalSteps) * 100),
                  completed: completedSteps,
                  total: totalSteps,
                },
                lastUpdated: progress.lastUpdated,
                startedAt: progress.startedAt,
              };
            }
            return null;
          })
          .filter((item) => item !== null)
          .sort((a, b) => b.progress.percentage - a.progress.percentage);

        setInProgressCourses(limit ? inProgress.slice(0, limit) : inProgress);
      } catch (err) {
        console.error("Error fetching in-progress courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInProgressCourses();
  }, [limit]);

  if (loading) {
    return (
      <div className={`bg-white rounded-xl shadow-sm p-6 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (inProgressCourses.length === 0) {
    return (
      <div
        className={`bg-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 ${className}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="text-blue-600" size={24} />
          <h2 className="text-xl font-bold text-gray-800">
            Start Your Journey
          </h2>
        </div>
        <p className="text-gray-600">
          You haven't started any courses yet. Browse our career paths and begin
          your learning journey!
        </p>
        <button
          onClick={() => navigate("/careers/all")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Explore Careers
        </button>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-sm ${className}`}
    >
      {showTitle && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-gray-800">
              Continue Your Journey
            </h2>
          </div>
          <span className="text-sm text-gray-500">
            {inProgressCourses.length} course
            {inProgressCourses.length !== 1 ? "s" : ""} in progress
          </span>
        </div>
      )}

      <div className="space-y-3">
        {inProgressCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => navigate(`/learn/${course.id}`)}
          >
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
              <div
                className="text-4xl bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center shrink-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${course.thumbnail})` }}
              ></div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {course.title}
                  </h3>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {course.progress.completed} / {course.progress.total} steps
                  </span>
                </div>

                <p className="text-sm text-gray-500 line-clamp-1 mb-2">
                  {course.description}
                </p>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span className="font-medium">
                      {course.progress.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${course.progress.percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/learn/${course.id}`);
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shrink-0"
              >
                <BookOpen size={16} />
                Continue
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
