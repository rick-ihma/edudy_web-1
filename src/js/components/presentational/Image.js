import React, { Component } from 'react';

import logo from '../assets/logo.png';

const Image = ({source, alt, name}) => {
    return <img src={source} alt={alt} className={name}/>
}

export default Image;