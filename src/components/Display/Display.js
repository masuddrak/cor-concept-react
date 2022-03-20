import React from 'react';
import './Display.css'

const Display = (props) => {
    return (
        <div className='display'>
            <h2>Display in Count</h2>
            <p>Show Display Run :{props.run}</p>
        </div>
    );
};

export default Display;