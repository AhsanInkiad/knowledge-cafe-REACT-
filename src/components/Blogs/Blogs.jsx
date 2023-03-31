import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Post from '../Posts/Post';
const Blogs = () => {
    
    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='blog-container'>
            <div className='individual-blogs'>
                {
                    blogs.map(blog => <Post
                        key={blog.id}
                        blog = {blog}
                    ></Post>)
                }
            </div>
            <div className='some-details'>
                <h2>bala</h2>
            </div>

        </div>
    );
};

export default Blogs;