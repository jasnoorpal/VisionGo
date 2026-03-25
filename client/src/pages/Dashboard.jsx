import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.name || "User"} 👋</h1>

      <p className="text-gray-600">
        Your dashboard is ready. Start building your journey 🚀
      </p>
    </div>
  );
}
