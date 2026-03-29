import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Award,
  Clock,
  ChevronRight,
  Zap,
  Target,
  BookOpen,
  Flame,
} from "lucide-react";
import API from "../services/api";
import ProgressTracker from "../components/ProgressTracker";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalSteps: 0,
    completedSteps: 0,
    streak: 0,
    certificates: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const careersRes = await API.get("/careers?includeModules=true");
        const allCareers = careersRes.data.data;

        let totalStepsCount = 0;
        let completedStepsCount = 0;
        let certificatesCount = 0;

        for (const career of allCareers) {
          const totalCareerSteps =
            career.modules?.reduce(
              (acc, m) => acc + (m.steps?.length || 0),
              0
            ) || 0;
          totalStepsCount += totalCareerSteps;

          try {
            const progressRes = await API.get(`/progress/${career._id}`);
            const progress = progressRes.data.data;
            const completed = progress.completedSteps?.length || 0;
            completedStepsCount += completed;

            if (totalCareerSteps > 0 && completed / totalCareerSteps >= 0.97) {
              certificatesCount++;
            }
          } catch (err) {
            throw new Error(err);
          }
        }

        const streak = Math.floor(Math.random() * 7) + 1;

        setStats({
          totalSteps: totalStepsCount,
          completedSteps: completedStepsCount,
          streak: streak,
          certificates: certificatesCount,
        });

        setRecentActivity([
          {
            type: "step",
            title: "Completed JavaScript Functions",
            date: "2 hours ago",
          },
          {
            type: "achievement",
            title: "5-day learning streak",
            date: "Yesterday",
          },
          {
            type: "certificate",
            title: "Earned Web Developer certificate",
            date: "3 days ago",
          },
        ]);
      } catch (err) {
        console.error("Error fetching stats:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserStats();
  }, []);

  const completionPercentage =
    stats.totalSteps > 0
      ? Math.round((stats.completedSteps / stats.totalSteps) * 100)
      : 0;

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-300" size={24} />
            <span className="text-sm font-semibold">Welcome Back!</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {greeting}, {user?.name?.split(" ")[0] || "Learner"}! 👋
          </h1>
          <p className="text-blue-100 mb-6 max-w-md">
            Ready to continue your learning journey? You've made great progress!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Target size={16} className="text-blue-200" />
                <span className="text-xs text-blue-200">Overall Progress</span>
              </div>
              <p className="text-2xl font-bold">{completionPercentage}%</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Flame size={16} className="text-orange-300" />
                <span className="text-xs text-blue-200">Day Streak</span>
              </div>
              <p className="text-2xl font-bold">{stats.streak} days</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen size={16} className="text-green-200" />
                <span className="text-xs text-blue-200">Steps Completed</span>
              </div>
              <p className="text-2xl font-bold">
                {stats.completedSteps}/{stats.totalSteps}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Award size={16} className="text-yellow-300" />
                <span className="text-xs text-blue-200">Certificates</span>
              </div>
              <p className="text-2xl font-bold">{stats.certificates}</p>
            </div>
          </div>
        </div>
      </div>

      <ProgressTracker showTitle={true} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="text-purple-600" size={24} />
                <h2 className="text-xl font-bold text-gray-800">
                  Recommended for You
                </h2>
              </div>
              <button
                onClick={() => navigate("/quiz")}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
              >
                Take Quiz <ChevronRight size={16} />
              </button>
            </div>

            <div className="space-y-3">
              <div
                onClick={() => navigate("/careers/career_web_dev")}
                className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">🌐</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      Complete Web Development
                    </h3>
                    <p className="text-sm text-gray-500">
                      Based on your interest in JavaScript
                    </p>
                  </div>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
              </div>

              <div
                onClick={() => navigate("/careers/career_mobile_dev")}
                className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="text-3xl">📱</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">
                      React Native Mastery
                    </h3>
                    <p className="text-sm text-gray-500">
                      Popular with other learners
                    </p>
                  </div>
                  <ChevronRight className="text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-800">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0"
                >
                  {activity.type === "step" && (
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                  )}
                  {activity.type === "achievement" && (
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      🏆
                    </div>
                  )}
                  {activity.type === "certificate" && (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      📜
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-3">🚀 Quick Actions</h3>
            <div className="space-y-2">
              <button
                onClick={() => navigate("/quiz")}
                className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-2 text-sm font-medium transition-all"
              >
                Find Your Perfect Career
              </button>
              <button
                onClick={() => navigate("/careers/all")}
                className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-2 text-sm font-medium transition-all"
              >
                Browse All Careers
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl p-6 text-white">
            <h3 className="font-bold mb-2">🎯 Daily Challenge</h3>
            <p className="text-sm opacity-90 mb-3">
              Complete one more step today to maintain your streak!
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white/30 rounded-full h-2">
                <div
                  className="bg-white rounded-full h-2"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <span className="text-xs font-semibold">60%</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
            <p className="text-gray-600 italic text-sm">
              "The beautiful thing about learning is that no one can take it
              away from you."
            </p>
            <p className="text-xs text-gray-400 mt-2">— B.B. King</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
