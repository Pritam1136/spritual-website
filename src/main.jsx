import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import NoPage from "./pages/NoPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Blog from "./pages/Blog.jsx";
import Footer from "./components/Footer.jsx";
import BlogDetail from "./components/BlogDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:link" element={<BlogDetail />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
