import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Image from '../presentational/Image.js';
import Button from '../presentational/button.js';
import Logo from '../assets/nav-logo.png';
import App from '../App.js';

import '../styles/nav.scss';

const Nav = ({ match }) => (
    <Router>
        <nav>
            <ul className="navbar">
                <li className="navbar-item"><Link to="/"><Image source={Logo} alt="Logo" name="nav-logo"/></Link></li>
                <li className="navbar-item"><Link to="/feature">Features</Link></li>
                <li className="navbar-item"><Link to="/customer">Customers</Link></li>
                <li className="navbar-item"><Link to="/login">Login</Link></li>
                <li className="navbar-item"><Link to="/learnmore"><Button name="btn-learnmore" value="Learn More" handleClick="" /></Link></li>
            </ul>

            <Route exact path="/" component={App} />
            <Route path="/feature" component={App} />
            <Route path="/customer" component={App} />
            <Route path="/login" component={App} />
            <Route path="/learnmore" component={App} />
        </nav>
    </Router>
);

export default Nav;