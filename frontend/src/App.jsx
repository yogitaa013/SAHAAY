import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <ThemeProvider>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={token ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/about" element={token ? <About /> : <Navigate to="/login" />} />
      <Route path="/how-to-use" element={token ? <HowToUse /> : <Navigate to="/login" />} />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
