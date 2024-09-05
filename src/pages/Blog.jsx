/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      link: "https://www.youtube.com/embed/z_UfPY8NXkM",
      title: "Video 1",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Video 2",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/9bZkp7q19f0",
      title: "Video 3",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/OC9gl-UEYVo",
      title: "Title 4",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/IRZg5qiUAA0",
      title: "Title 5",
    },
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll(".blog-container");
    elements.forEach((el) => {
      el.classList.remove("scroll-appear");
      setTimeout(() => {
        el.classList.add("scroll-appear");
      }, 100);
    });
  }, []);

  return (
    <div className="blog-container">
      {videos.map((video) => (
        <div className="blog-card" key={video.id}>
          <iframe
            width="100%"
            height="200"
            src={video.link}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          ></iframe>
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Blog;
