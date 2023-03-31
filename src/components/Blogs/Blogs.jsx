import React, { useEffect, useState } from 'react';
import './Blogs.css';
const Blogs = () => {
   const[blogs, setBlogs] = useState([]);
   useEffect(() =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
   },[] )

    return (
        <div className='blog-container'>
            <div className='individual-blogs'>
                <h2>LALALALA {blogs.length} </h2>
            </div>
            <div className='some-details'>
                <h2>bala</h2>
            </div>

        </div>
    );
};

export default Blogs;