import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Landing from "./pages/Landing";
import AuthPage from "./pages/Auth";
import NotFound from "./pages/notFound";
import { Layout } from "./components/Layout";
import HomeRedirect from "./components/HomeRedirect";

import Home from "./pages/Home";
import Careers from "./pages/Careers";
import AllCareers from "./pages/AllCareers";
import CareerDetails from "./pages/CareerDetails";
import LearningPage from "./pages/LearningPage";
import CareerQuiz from "./pages/CareerQuiz";
import CareerRecommendations from "./pages/CareerRecommendations";
import CertificateViewer from "./pages/CertificateViewer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRedirect />}>
        <Route index element={<Landing />} />
        <Route path="/auth/:pageType" element={<AuthPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/all" element={<AllCareers />} />
          <Route path="/careers/:id" element={<CareerDetails />} />
          <Route path="/quiz" element={<CareerQuiz />} />
          <Route path="/recommendations" element={<CareerRecommendations />} />
          <Route path="/certificate/:id" element={<CertificateViewer />} />
          {/* <Route path="/assessment" element={<Assessment />} /> */}
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/learn/:id" element={<LearningPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
