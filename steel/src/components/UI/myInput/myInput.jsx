import React from 'react';
import cl from './myInput.module.css'

const MyInput = (props) => {
    return (
        <input {...props} className={cl.input} />
    );
};

export default MyInput;