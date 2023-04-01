import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const totalTime = props.totalTime;
    const bookmark = props.bookmark;
    const titles = props.titles;
    console.log(titles);

    return (
        <div className='side-bar'>
            <div className='time-box'>
                <p className='x'>Spent time on read: {totalTime} min</p>
            </div>
            <div className='bookmarked-blogs'>
                <p className='heading'>Bookmarked Blogs: {bookmark.length} </p>
                {titles.map(title =>
                    <p className='box'>{title}</p> 
                )
                }
            </div>


        </div>
    );
};

export default Sidebar;