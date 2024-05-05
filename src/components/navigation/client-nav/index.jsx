import { MdOutlineSos } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function ClientNav({ setSos }) {
  const navigate = useNavigate();

  return (
    <nav className="client-nav">
      <div className="client-nav-logo">
        <img
          src="/images/logo.png"
          onClick={() => {
            navigate("/");
          }}
          alt="Logo"
        />
      </div>
      <div onClick={() => setSos(true)} className="client-nav-btn client-nav-sos">
        <MdOutlineSos />
      </div>
      <div onClick={() => setSos(true)} className="client-nav-btn">
        <TbLogin2 />
      </div>
    </nav>
  );
}

export default ClientNav;
