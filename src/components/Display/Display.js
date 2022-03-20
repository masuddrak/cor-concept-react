import React from 'react';
import Runtime from '../Runtime/Runtime';
import './Display.css'

const Display = (props) => {
    return (
        <div className='display'>
            <h2>Display in Count</h2>
            <p>Show Display Run :{props.run}</p>
            <Runtime run={props.run}></Runtime>
        </div>
    );
};

export default Display;