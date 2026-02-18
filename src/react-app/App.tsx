import { BrowserRouter as Router, Routes, Route } from "react-router";
import { AuthProvider } from "@getmocha/users-service/react";
import { LanguageProvider } from "@/react-app/contexts/LanguageContext";
import { ThemeProvider } from "@/react-app/contexts/ThemeContext";
import HomePage from "@/react-app/pages/Home";
import AuthCallbackPage from "@/react-app/pages/AuthCallback";
import LoginPage from "@/react-app/pages/Login";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/auth/callback" element={<AuthCallbackPage />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
