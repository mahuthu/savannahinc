// BlogDetailPage.jsx
import React from "react";
import BlogDetail from "../Components/Blog/BlogDetail";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import AboutUs1 from "../Components/Aboutus/Aboutus6";

const BlogDetailPage = () => {
  return (
    <div className="App">
      <Navbar />
      <AboutUs1 mainHeading="Blog Detail" subHeading="Home » Blog Detail" />
      <BlogDetail />
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
