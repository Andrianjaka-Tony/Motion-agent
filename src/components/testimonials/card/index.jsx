import "./style.scss";

function TestimonialCard({ text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-text">
        <span className="colored">"</span>
        {text}
      </div>
      <div className="testimonials-user">
        <img src="/images/1.jpeg" alt="" />
        <p>John Doe</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
