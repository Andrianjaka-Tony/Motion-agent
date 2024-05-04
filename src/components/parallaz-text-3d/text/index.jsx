import "./style.scss";

function Text({ text = "" }) {
  return (
    <div className="parallax-text-3d-text">
      <p>{text}</p>
    </div>
  );
}

export default Text;
