import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const totalTime = props.totalTime;

    return (
        <div className='side-bar'>
            <div className='time-box'>
                <p className='x'>Spent time on read: {totalTime} min</p>
            </div>
            <div className='bookmarked-blogs'>
                <p className='heading'>Bookmarked Blogs: </p>

            </div>

        </div>
    );
};

export default Sidebar;