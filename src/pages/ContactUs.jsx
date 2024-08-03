import "./ContactUs.css";

const ContactUs = () => {
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
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
