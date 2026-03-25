import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import AuthPage from "./pages/Auth";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notFound";
import { Layout } from "./components/Layout";
import HomeRedirect from "./components/HomeRedirect";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomeRedirect />}>
        <Route index element={<Landing />} />
        <Route path="/auth/:pageType" element={<AuthPage />} />
      </Route>

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/assessment" element={<Assessment />} />
          <Route path="/careers" element={<CareersList />} />
          <Route path="/career-detail/:id" element={<CareerDetail />} />
          <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
