import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>
          Contact <span className="comment">Get in Touch</span>
        </h2>
        <div className="contact__info">
          <a href="mailto:hasanerdemak@gmail.com" className="btn">
            hasanerdemak@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
