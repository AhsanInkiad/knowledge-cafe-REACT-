import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const totalTime = props.totalTime;
    const bookmark = props.bookmark;

    return (
        <div className='side-bar'>
            <div className='time-box'>
                <p className='x'>Spent time on read: {totalTime} min</p>
            </div>
            <div className='bookmarked-blogs'>
                <p className='heading'>Bookmarked Blogs:{bookmark.length} </p>
                <p className='box'>How to get your first job as a self-taught programmer.</p>
            </div>


        </div>
    );
};

export default Sidebar;