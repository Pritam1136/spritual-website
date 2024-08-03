import { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".about-container");
    elements.forEach((el) => {
      el.classList.add("scroll-appear");
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We are a team of passionate individuals committed to making a
            difference. Our journey began with a simple idea: to create
            something that could change lives. Through hard work and dedication,
            we have grown into a thriving community that continues to innovate
            and inspire.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide exceptional value and service to our
            customers. We strive to exceed expectations in everything we do and
            are constantly looking for ways to improve and evolve.
          </p>
          <h2>Our Team</h2>
          <p>
            Our team is made up of talented and dedicated professionals from
            diverse backgrounds. Together, we bring a wealth of experience and
            expertise to the table, allowing us to tackle challenges and achieve
            great things.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://beerbiceps.com/wp-content/uploads/2023/02/Screenshot-49-1.png"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
