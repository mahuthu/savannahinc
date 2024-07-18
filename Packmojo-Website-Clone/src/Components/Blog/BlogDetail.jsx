import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/blogs/${id}/`);
                console.log(response);
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

    const containerStyle = {
        border: '1px solid #eaeaea',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        backgroundColor: '#F5F9FC',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const imageStyle = {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '20px',
    };

    const titleStyle = {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const descriptionStyle = {
        fontSize: '18px',
        color: '#555555',
        lineHeight: '1.8',
        textAlign: 'justify',
    };

    return (
        <div style={containerStyle}>
            <img src={blog.image} alt={blog.title} style={imageStyle} />
            <h1 style={titleStyle}>{blog.title}</h1>
            <p style={descriptionStyle}>{blog.description}</p>
        </div>
    );
};

export default BlogDetail;
