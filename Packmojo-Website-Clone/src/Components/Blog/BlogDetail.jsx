import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import styles from "./BlogDetail.module.css";
import backgroundImage from '../../Dataset/bac3.jpg'; // Import your background image



const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://savannahinc.co.ke:8000/api/blogs/${id}/`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog data:", error);
            }
        };

        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div 
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
        <div className={styles["blog-detail-container"]}
          >
        
            <img src={blog.image} alt={blog.title} className={styles["blog-image"]} />
            <div className={styles["blog-content"]}>
                <span className={styles["blog-category"]}>{blog.category || "General"}</span>
                <h1 className={styles["blog-title"]}>{blog.title}</h1>
                <div className={styles["blog-meta"]}>
                    <span>By {blog.author || "Anonymous"}</span>
                    <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                </div>
                <p className={styles["blog-description"]}>{blog.description}</p>
                <Link to="/blog" className={styles["back-link"]}>← Back to Blogs</Link>
            </div>
        </div>
        </div>
    );
};

export default BlogDetail;