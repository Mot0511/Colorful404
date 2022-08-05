import React from 'react';
import cl from './myButton.module.css'

const MyButton = (props) => {
    return (
        <div>
            <button {...props} className={cl.button}>{props.text}</button>
        </div>
    );
};

export default MyButton;