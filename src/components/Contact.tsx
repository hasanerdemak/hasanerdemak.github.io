import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const Contact: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/moveggzb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setError(false);
        form.reset();
        setValidated(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">
          Contact Me
        </h2>
        <div className="row gy-4">
          <div className="col-md-6">
            <div
              className="p-4 border rounded-4 bg-light shadow-sm h-100 d-flex flex-column justify-content-between"
              data-aos="fade-right"
            >
              <div>
                <h5 className="mb-4">
                  <i className="bi bi-person-lines-fill me-2"></i>Get in Touch
                </h5>
                <div className="mb-3">
                  <div className="fw-bold">
                    <i className="bi bi-envelope me-2"></i>Email
                  </div>
                  <div className="text-muted small">hasanerdemak@gmail.com</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">
                    <i className="bi bi-telephone me-2"></i>Phone
                  </div>
                  <div className="text-muted small">+90 537 471 54 03</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">
                    <i className="bi bi-geo-alt me-2"></i>Location
                  </div>
                  <div className="text-muted small">Ankara, Turkey</div>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">
                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                  </div>
                  <a
                    href="https://linkedin.com/in/hasanerdemak"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none small"
                  >
                    linkedin.com/in/hasanerdemak
                  </a>
                </div>
                <div>
                  <div className="fw-bold">
                    <i className="bi bi-github me-2"></i>GitHub
                  </div>
                  <a
                    href="https://github.com/hasanerdemak"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none small"
                  >
                    github.com/hasanerdemak
                  </a>
                </div>
              </div>
              <div className="ratio ratio-16x9 mt-4 rounded shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100774.7891357847!2d32.89359314242915!3d39.92885396193266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1745178209897!5m2!1str!2str"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="p-4 bg-white border rounded-4 shadow-sm h-100 d-flex flex-column justify-content-between"
              data-aos="fade-left"
            >
              <div>
                <h5 className="mb-4">
                  <i className="bi bi-envelope-fill me-2"></i>Send a Message
                </h5>
                {success && (
                  <div className="alert alert-success">
                    Message sent successfully!
                  </div>
                )}
                {error && (
                  <div className="alert alert-danger">
                    Something went wrong. Please try again.
                  </div>
                )}
                <form
                  noValidate
                  className={validated ? "was-validated" : ""}
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message"
                      required
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter your message.
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-2">
                    <i className="bi bi-send-fill me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
