import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Image from '../presentational/Image.js';
import Logo from '../assets/nav-logo.png';

import '../styles/nav.scss';

const Nav = ({ match }) => (
    <Router>
        <nav>
            <ul className="navbar">
                <li className="navbar-item"><Link to="/"><Image source={Logo} alt="Logo" name="nav-logo"/></Link></li>
                <li className="navbar-item"><Link to="/feature">Features</Link></li>
                <li className="navbar-item"><Link to="/customer">Customers</Link></li>
                <li className="navbar-item"><Link to="/login">Login</Link></li>
                <li className="navbar-item"><Link to="/learnmore">Learn More</Link></li>
            </ul>

            <Route exact path="/" component="" />
            <Route path="/feature" component="" />
            <Route path="/customer" component="" />
            <Route path="/login" component="" />
            <Route path="/learnmore" component="" />
        </nav>
    </Router>
);

export default Nav;