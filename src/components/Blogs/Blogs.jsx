import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Post from '../Posts/Post';
import Sidebar from '../Sidebar/Sidebar';
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [ftime, setTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);
    const [titles, setTitles] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    const bookMarked = (id,blogtitles) => {
        const newbookmark = [...bookmark,id];
        const newtitles = [...titles,blogtitles]
        setBookmark(newbookmark);
        setTitles(newtitles);

    }
    const readingTime = (time) => {
        setTime(ftime + time);
    }

    return (
        <div className='blog-container'>
            <div className='individual-blogs'>
                {
                    blogs.map(blog => <Post
                        key={blog.id}
                        blog={blog}
                        readingTime={readingTime}
                        bookMarked={bookMarked}
                        
                        

                    ></Post>)
                }
            </div>
            <div>
                <div className='some-details'>
                    <Sidebar
                        totalTime={ftime}
                        bookmark={bookmark}
                        titles={titles}></Sidebar>
                </div>

            </div>


        </div>
    );
};

export default Blogs;