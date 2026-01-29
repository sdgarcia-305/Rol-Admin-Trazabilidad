import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import VerifyCode from "./pages/login/VerifyCode";
import ResetPassword from "./pages/login/ResetPassword";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}/>

        {/* Recuperación de contraseña (PUBLICAS) */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard protegido */}
        <Route path="/admin" element={ isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}/>

        {/* Redirección inicial */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="text-center mt-20">Página no encontrada</div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
