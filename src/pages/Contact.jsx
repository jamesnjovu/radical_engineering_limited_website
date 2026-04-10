import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to a backend/email service
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Page Banner */}
      <section className="page-banner" style={{ backgroundImage: "url(/images/machinary2.jpeg)" }}>
        <h1>Contact Us</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; Contact
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Info Cards */}
          <ScrollReveal>
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <FaPhone />
                </div>
                <h4>Phone</h4>
                <p>
                  <a href="tel:+260969722376">+260 969 722 376</a>
                </p>
                <p>
                  <a href="tel:+260977775293">+260 977 775 293</a>
                </p>
                <p>
                  <a href="tel:+260774718331">+260 774 718 331</a>
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <FaEnvelope />
                </div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:radicalengineering22@gmail.com">
                    radicalengineering22@gmail.com
                  </a>
                </p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card__icon">
                  <FaMapMarkerAlt />
                </div>
                <h4>Location</h4>
                <p>Alick Nkhata Rd,</p>
                <p>Adjacent to Kamloops Mall,</p>
                <p>Lusaka, Zambia</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form & Map */}
          <ScrollReveal>
            <div className="contact-content">
              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <h3>Send Us a Message</h3>
                <p>
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+260 ..."
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="Solar Energy">Solar Energy</option>
                        <option value="Civil Engineering">
                          Civil &amp; Structural Engineering
                        </option>
                        <option value="Electrical Engineering">
                          Electrical Engineering
                        </option>
                        <option value="Mining Engineering">
                          Mining Engineering
                        </option>
                        <option value="General Supplies">
                          General Supplies
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <FaPaperPlane /> Send Message
                  </button>

                  {submitted && (
                    <div className="form-success">
                      Thank you! Your message has been sent successfully. We
                      will get back to you shortly.
                    </div>
                  )}
                </form>
              </div>

              {/* Google Maps */}
              <div className="contact-map">
                <iframe
                  title="Radical Engineering Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.5!2d28.3228!3d-15.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408b79e5b7e1d7%3A0x2a6e4f13a4d0f5e2!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1700000000000!5m2!1sen!2szm"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
