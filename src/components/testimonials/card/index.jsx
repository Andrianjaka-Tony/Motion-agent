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
          <img src="/images/13.jpeg" alt="" />
        </div>
        <p>John Doe</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
