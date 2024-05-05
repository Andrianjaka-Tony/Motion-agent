import { useNavigate } from "react-router-dom";
import "./style.scss";

function Navbar({ setSidebarOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/images/logo.png"
          onClick={() => {
            navigate("/");
          }}
          alt="Logo"
        />
      </div>
      <button onClick={() => setSidebarOpen(true)} className="navbar-btn">
        Menu
      </button>
    </nav>
  );
}

export default Navbar;
