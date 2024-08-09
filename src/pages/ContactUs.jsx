import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-container");
    elements.forEach((el) => {
      el.classList.remove("scroll-appear");
      setTimeout(() => {
        el.classList.add("scroll-appear");
      }, 100);
    });
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxRdwxRjKXZOenYHkVpSu2R2bonsLeiB5iU_3AFMFMDKGeNPCJoJulg3yw6mrT-BcIqEA/exec";

    try {
      const response = await axios.post(scriptURL, formData);
      if (response.data.result === "success") {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          We would love to hear from you! Please take a moment to fill out this
          form, and one of our representatives will get in touch with you
          shortly. Your feedback and inquiries are important to us, and we look
          forward to assisting you with any questions or concerns you may have.
        </p>
        <div className="info">
          <h4>Email</h4>
          <p>contact@company.com</p>
          <h4>Phone</h4>
          <p>+123 456 7890</p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
