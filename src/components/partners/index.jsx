import "./style.scss";

function Partners() {
  const images = [
    "/partners/1.webp",
    "/partners/2.webp",
    "/partners/3.webp",
    "/partners/4.webp",
    "/partners/5.webp",
    "/partners/6.webp",
    "/partners/7.webp",
    "/partners/8.webp",
    "/partners/9.png",
    "/partners/10.webp",
    "/partners/11.png",
  ];

  return (
    <div className="partners">
      <div className="partners-title">Partners</div>
      <div className="partners-container">
        {images.map((image, key) => (
          <div key={key} className="partner-card">
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
