import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Compass, GraduationCap, LogOut, Home, Sparkles } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/home", label: "Home", icon: Home },
    { path: "/careers", label: "Careers", icon: GraduationCap },
    { path: "/quiz", label: "AI Quiz", icon: Sparkles },
  ];

  return (
    <div>
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r border-r-2 border-blue-600 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-8 px-2">
            <Compass className="text-blue-600" size={28} />
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vision Go
            </h2>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <div
                  className={`flex gap-2 p-2 rounded my-2 ${
                    active
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-200 transition ease-in-out"
                  }`}
                >
                  <Icon size={20} />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="space-y-2">
          <div className="p-2 text-sm text-gray-500 border-t pt-4">
            <p className="font-medium">{user?.name}</p>
            <p className="text-xs">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full p-2 rounded hover:bg-red-500 hover:text-white transition ease-in-out duration-50 flex items-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      <main className="ml-64 h-screen overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
