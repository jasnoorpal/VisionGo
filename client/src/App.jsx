import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import AuthPage from "./pages/Auth";
import NotFound from "./pages/notFound";
import { Layout } from "./components/Layout";
import HomeRedirect from "./components/HomeRedirect";

import Dashboard from "./pages/dashboard";
import Careers from "./pages/Careers";
import AllCareers from "./pages/AllCareers";
import CareerDetails from "./pages/CareerDetails";

import LearningPage from "./pages/LearningPage";

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
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/all" element={<AllCareers />} />
          <Route path="/careers/:id" element={<CareerDetails />} />
          {/* <Route path="/assessment" element={<Assessment />} /> */}
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/learn/:id" element={<LearningPage />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
