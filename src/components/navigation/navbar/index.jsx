import "./style.scss";

function Navbar({ setSidebarOpen }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <button onClick={() => setSidebarOpen(true)} className="navbar-btn">
        Menu
      </button>
    </nav>
  );
}

export default Navbar;
