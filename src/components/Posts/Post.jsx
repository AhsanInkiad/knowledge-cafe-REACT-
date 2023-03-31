import React from 'react';
import './Post.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Post = (props) => {


    return (
        <div className='post-container'>
            <img className='blog-er-pic' src={props.blog.blogpic} alt="" />
            <div className='eta-info-container'>
                <div className='eta-pic-n-detail'>
                    <img className='author-er-pic' src={props.blog.pic} alt="" />
                    <div>
                        <p className='name-of-author'>{props.blog.authorname}</p>
                        <p>{props.blog.publishdate}</p>
                    </div>
                </div>
                <div className='read-time-bookmark'>
                    <div className='read-n-btn'>
                        <p>{props.blog.readtime} min read </p>
                        <button className='bookmark-btn'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>

                </div>
            </div>
            <p>{props.blog.blogtitle}</p>



        </div>
    );
};

export default Post;