import { Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".container");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add("scroll-appear");
        } else {
          element.classList.remove("scroll-appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Full-Width Image Section */}
      <div className="full-width-image-container">
        <img
          src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
          alt="Spiritual Journey"
        />
      </div>

      {/* Content Section */}
      <div className="container">
        <div>
          <img
            src="https://beerbiceps.com/wp-content/uploads/2023/02/Screenshot-49-1.png"
            alt="Ranveer"
          />
        </div>
        <div className="content">
          <h4 className="Ak">Akshat ka safar</h4>
          <div>
            <div className="contentDiv">
              <div>1M+</div>
              <p>SM reach</p>
            </div>
            <div className="contentDiv">
              <div>10K+</div>
              <p>book sold</p>
            </div>
          </div>
          <button>
            <Link to="/about">Know more</Link>
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media">
        <h4>Join the Community</h4>
        <div className="community">
          <p className="communityParagraph">
            Keep up with Akshat Gupta by following him on his social media
            profiles. You’ll get all the latest updates on his upcoming
            projects, exciting events, engaging podcasts, and more interesting
            content.
          </p>
        </div>

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
        <Link to={"/contact"}>
          {" "}
          <button>Send me a message</button>
        </Link>
      </div>
    </>
  );
}

export default App;
