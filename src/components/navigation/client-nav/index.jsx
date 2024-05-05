import { MdOutlineSos } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import "./style.scss";

function ClientNav({ setSos, setIsLogin }) {
  return (
    <nav className="client-nav">
      <div className="client-nav-logo">Logo</div>
      <div onClick={() => setSos(true)} className="client-nav-btn client-nav-sos">
        <MdOutlineSos />
      </div>
      <div onClick={() => setIsLogin(true)} className="client-nav-btn">
        <TbLogin2 />
      </div>
    </nav>
  );
}

export default ClientNav;
