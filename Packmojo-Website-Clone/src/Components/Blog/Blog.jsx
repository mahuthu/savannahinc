import React from "react";
import styles from "./Blog.module.css";

const Blog = ({ id, image, title, description }) => {
    const truncateDescription = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + "...";
    };

    return (
        <div className={styles["blog-container"]}>
            <img src={image} alt="" className={styles["blog-image"]} />
            <h3 className={styles["blog-title"]}>{title}</h3>
            <p className={styles["blog-description"]}>
                {truncateDescription(description, 200)}
            </p>
            <a href={`/blogs/${id}`} className={styles["view-more-link"]}>
                View More &gt;&gt;
            </a>
        </div>
    );
};

export default Blog;
