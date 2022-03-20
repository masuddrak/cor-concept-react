import React from 'react';
import PhonePrice from '../PhonePrice/PhonePrice';
import './Phone.css';

const Phone = (props) => {
    return (
        <div className='phone'>
            <h2>Phone Name {props.name}</h2>
            <PhonePrice price={props.price}></PhonePrice>
        </div>
    );
};

export default Phone;