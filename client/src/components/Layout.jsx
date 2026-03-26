import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LayoutDashboard, Compass, GraduationCap, LogOut } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/careers", label: "Careers", icon: GraduationCap },
    { path: "/Page 3", label: "Assessment", icon: Compass },
  ];

  return (
    <div>
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white border-r border-r-2 border-blue-600 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Vision Go</h2>

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
                  <Icon />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>

        <div>
          <button
            onClick={logout}
            className="p-2 rounded hover:bg-red-500 hover:text-white transition ease-in-out duration-50"
          >
            <LogOut /> Logout
          </button>
        </div>
      </aside>

      <main className="ml-64 h-screen overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}
