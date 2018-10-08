import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Image from '../presentational/Image.js';
import Button from '../presentational/button.js';

import '../styles/hero.scss';
import logo from '../assets/logo.png';

class Hero extends Component {

    handleJourney = () => {
        alert('test')
    }

    render(){
        return(
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <Image source={logo} alt="Edudy Logo" name="hero-logo"/>
                        <div className="below-logo">
                            <Button name="journey" handleClick={this.handleJourney} value={["Start journey",<br />,"scroll down",<br /> ,<FontAwesomeIcon icon="arrow-down" size="1x" />]}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Hero;