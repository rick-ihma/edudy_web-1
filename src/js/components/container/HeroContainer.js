import React, { Component } from 'react';

import Button from '../presentational/button.js';

import '../styles/hero.scss';



class Hero extends Component {

    handleTry = (event) => {
        alert('pass')
    }

    render(){
        return(
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Boring Dinosaur Education ?</h1>
                        <h2 className="subtitle">Study in the Education of future</h2>
                        <Button name="btn-try" value="Try now!" handleClick={this.handleTry} />
                    </div>
                </div>
            </section>
        );
    }

}

export default Hero;