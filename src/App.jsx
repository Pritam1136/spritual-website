import { Link } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        ".container, .first-container"
      );
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
      <div className="first-container">
        <div className="first-content">
          <h4>Welcome Here</h4>
          <p>
            Take your first step towards <b>Sprituality</b>
          </p>
          <input type="email" placeholder="Enter you gmail...." />
          <button>Subscribe</button>
        </div>
        <div>
          <img
            src="https://beerbiceps.com/wp-content/uploads/2023/02/Screenshot-49-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <div>
          <img
            src="https://beerbiceps.com/wp-content/uploads/2023/02/Screenshot-49-1.png"
            alt="photo"
          />
        </div>
        <div className="content">
          <h4>Meet Ranveer</h4>
          <p>
            BeerBiceps a.k.a. Ranveer Allahbadia is an entrepreneur, YouTuber,
            Podcaster, and content creator. My life mantra is to explore the
            unexplored. But how did this journey start? From being an average
            engineering student to having around 12Million+ followers across 7
            YouTube channels and 3 successful start-ups. This is my journey.
          </p>
          <button>
            <Link to={"/about"}>Know more</Link>
          </button>
        </div>
      </div>
      <div className="social-media">
        <h4>Join the Community</h4>
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
    </>
  );
}

export default App;
