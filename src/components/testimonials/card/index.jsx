import "./style.scss";

function TestimonialCard({ text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-text">
        <span className="colored">"</span>
        {text}
      </div>
      <div className="testimonials-user">
        <div className="img-container">
          <img src="/images/3.jpeg" alt="" />
        </div>
        <p>Secret agent</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
