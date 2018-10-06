import React from 'react';

const Button = ({name, value, handleClick}) => (
    <button className={name} onClick={handleClick}>
        {value}
    </button>
);

export default Button;