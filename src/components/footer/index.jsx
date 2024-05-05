import { Link } from "react-router-dom";
import TextAnime from "../text-anime";
import "./style.scss";

function Footer() {
  const connected = window.localStorage.getItem("motion-user") ? true : false;

  return (
    <section className="footer">
      <h2 className="footer-title">
        <TextAnime delay={1} stagger={0.1} text="Let's work together" />
      </h2>
      <div className="footer-content">
        <div className="footer-content-column navigation">
          <div className="footer-content-column-title">Navigation</div>
          <Link to="/" className="fotter-content-column-link">
            Home
          </Link>
          {connected ? (
            <>
              <Link to="/gadgets" className="fotter-content-column-link">
                Gadget
              </Link>
              <Link to="/profile" className="fotter-content-column-link">
                Profile
              </Link>
              <Link to="/archives" className="fotter-content-column-link">
                Archives
              </Link>
            </>
          ) : (
            <></>
          )}

          <Link className="fotter-content-column-link">Partners</Link>
        </div>
        <div className="footer-content-column socials">
          <div className="footer-content-column-title">Socials</div>
          <Link className="fotter-content-column-link">Github</Link>
          <Link className="fotter-content-column-link">Snapchat</Link>
          <Link className="fotter-content-column-link">WhatsApp</Link>
          <Link className="fotter-content-column-link">Instagram</Link>
          <Link className="fotter-content-column-link">Linkedin</Link>
          <Link className="fotter-content-column-link">Fiverr</Link>
          <Link className="fotter-content-column-link">X</Link>
        </div>
        <div className="footer-content-column ressources">
          <div className="footer-content-column-title">Ressources</div>
          <Link className="fotter-content-column-link">Awwwards</Link>
          <Link className="fotter-content-column-link">Adobe fonts</Link>
          <Link className="fotter-content-column-link">Open AI API</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-bottom-content-text-left">2024</p>
          <p className="footer-bottom-content-text-left">Motion Agent</p>
        </div>
        <div className="footer-bottom-content">
          <p className="footer-bottom-content-right">GMT +3</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
