import React from 'react';
import './Post.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {
const bookMarked = props.bookMarked;

const readingTime = props.readingTime;

    return (
        <div className='post-container'>
            <img className='blog-er-pic' src={props.blog.blogpic} alt="" />
            <div className='eta-info-container'>
                <div className='eta-pic-n-detail'>
                    <img className='author-er-pic' src={props.blog.pic} alt="" />
                    <div>
                        <p className='name-of-author'>{props.blog.authorname}</p>
                        <p className='publish-date'>{props.blog.publishdate}</p>
                    </div>
                </div>
                <div className='read-time-bookmark'>
                    <div className='read-n-btn'>
                        <p className='read-time'>{props.blog.readtime} min read </p>
                        <button className='bookmark-btn'  onClick={() => bookMarked(props.blog.id)}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>

                </div>
            </div>
            <p className='blog-title'>{props.blog.blogtitle} </p>
            <button className='mark-btn' onClick={() => readingTime(props.blog.readtime)}><u className='inside-btn'>Mark as read</u></button>


        </div>
    );
};

export default Post;