import { MdOutlineSos } from "react-icons/md";
import "./style.scss";

function ClientNav({ setSos }) {
  return (
    <nav className="client-nav">
      <div className="client-nav-logo">Logo</div>
      <div onClick={() => setSos(true)} className="client-nav-sos">
        <MdOutlineSos />
      </div>
    </nav>
  );
}

export default ClientNav;
