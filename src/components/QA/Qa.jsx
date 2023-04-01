import React from 'react';
import './Qa.css'

const Qa = (props) => {
    return (
        <div className='qa-contain'>
            <p className='questions'>{props.q.question}</p>
            <p>{props.q.answer}</p>
        </div>
    );
};

export default Qa;