import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.css";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".about-container");
    elements.forEach((el) => {
      el.classList.remove("scroll-appear");
      setTimeout(() => {
        el.classList.add("scroll-appear");
      }, 100); // Delay to ensure the class is removed before re-adding it
    });
  }, [location]);

  return (
    <div>
      <div className="about-header">
        <h1>About Akshat</h1>
        <div className="icons">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="mainParagraph">
          <p>
            Akshat Gupta’s passion for writing and storytelling has catalyzed
            his journey into a versatile persona within the realms of literature
            and entertainment. Hailing from Indore, Akshat wears multiple hats,
            excelling as a bestselling author, a prolific screenwriter, a
            soul-stirring lyricist, a poetic maestro, and a dedicated historian.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              We are a team of passionate individuals committed to making a
              difference. Our journey began with a simple idea: to create
              something that could change lives. Through hard work and
              dedication, we have grown into a thriving community that continues
              to innovate and inspire.
            </p>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional value and service to our
              customers. We strive to exceed expectations in everything we do
              and are constantly looking for ways to improve and evolve.
            </p>
            <h2>Our Team</h2>
            <p>
              Our team is made up of talented and dedicated professionals from
              diverse backgrounds. Together, we bring a wealth of experience and
              expertise to the table, allowing us to tackle challenges and
              achieve great things.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://wallpapercave.com/wp/wp2722928.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
