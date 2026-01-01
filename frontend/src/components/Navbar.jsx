import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Sahaay 🌈</h2>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/how-to-use">How to Use</Link>

        {/* Theme Toggle Icon */}
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
