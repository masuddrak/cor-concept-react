import React from 'react';
import './Runtime.css'

const Runtime = (props) => {
    return (
        <div className='runtime'>
            <h2>Run Time Execute </h2>
            <p>Run Time :{props.run}</p>
        </div>
    );
};

export default Runtime;