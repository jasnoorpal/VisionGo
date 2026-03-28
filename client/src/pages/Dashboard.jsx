import { useAuth } from "../context/AuthContext";
import ProgressTracker from "../components/ProgressTracker";
import ProgressTrackerCompact from "../components/ProgressTrackerCompact";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || "User"} 👋</h1>

      <p className="text-gray-600">
        Your dashboard is ready. Start building your journey 🚀
      </p>

      {/* Full Progress Tracker */}
      <div className="mt-6">
        <ProgressTracker showTitle={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          {/* Main content area */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-500">
              Your recent learning activity will appear here...
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <ProgressTrackerCompact limit={3} />
        </div>
      </div>
    </div>
  );
}
