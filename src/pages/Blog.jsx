import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("/blogData.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".blog-container");
    elements.forEach((el) => {
      el.classList.remove("scroll-appear");
      setTimeout(() => {
        el.classList.add("scroll-appear");
      }, 100);
    });
  }, [location]);

  const handleRedirect = (link) => {
    navigate(`/blogs/${link}`);
  };

  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div
          className="blog-card"
          key={blog.id}
          onClick={() => handleRedirect(blog.link)}
        >
          <img src={blog.coverPhoto} alt={blog.heading} />
          <h3>{blog.heading}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
