import { Link, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LayoutDashboard, Compass, GraduationCap, LogOut } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/Page 2", label: "Assessment", icon: Compass },
    { path: "/Page 3", label: "Careers", icon: GraduationCap },
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">Vision Go</h2>

        {navItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path}>
              <div
                className={`flex gap-2 p-2 rounded ${
                  active ? "bg-blue-500 text-white" : ""
                }`}
              >
                <Icon />
                {item.label}
              </div>
            </Link>
          );
        })}

        <button onClick={logout} className="mt-10">
          <LogOut /> Logout
        </button>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
