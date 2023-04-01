import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Post from '../Posts/Post';
import Sidebar from '../Sidebar/Sidebar';
const Blogs = () => {
    
    const [blogs, setBlogs] = useState([]);
    const [ftime, setTime] = useState(0);
    
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    

    const readingTime = (time) => {
     
        setTime(ftime+time);
    }

    return (
        <div className='blog-container'>
            <div className='individual-blogs'>
                {
                    blogs.map(blog => <Post
                        key={blog.id}
                        blog = {blog}
                        readingTime = {readingTime}

                    ></Post>)
                }
            </div>
            <div>
            <div className='some-details'>
               <Sidebar
               totalTime={ftime}></Sidebar>
            </div>

            </div>
            

        </div>
    );
};

export default Blogs;