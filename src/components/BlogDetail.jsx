import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { link } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogData.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBlog = data.find((blog) => blog.link === link);
        setBlog(foundBlog);
      })
      .catch((error) => console.error("Error fetching blog data:", error));
  }, [link]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail-container">
      <h1>{blog.heading}</h1>
      <img src={blog.coverPhoto} alt={blog.heading} />
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetail;
