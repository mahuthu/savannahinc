import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "../Components/Blog/Blog"; // Path to your Blog component
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer";
import "../Components/Styles.module.css";
import AboutUs1 from "../Components/Aboutus/Aboutus6";
import styles from "../Components/Blog/Blog.module.css";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs/");
        console.log("Blogs fetched:", response.data);
        setBlogs(response.data);
        setFetched(true);  // Update the flag to prevent re-fetching
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    if (!fetched) {
      fetchBlogs();
    }
  }, [fetched]);

  return (
    <div className="App">
      <Navbar />
      <AboutUs1 mainHeading="Blog" subHeading="Home » Blog" />
      <div className={styles["blog-page-container"]}>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            id={blog.id}

            image={blog.image}
          

            title={blog.title}
            description={blog.description}
          
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
