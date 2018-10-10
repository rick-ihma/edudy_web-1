import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add([faStroopwafel, faArrowDown]);

import Hero from './container/HeroContainer.js';
import Nav from './container/NavigationContainer.js';

class App extends Component {
    render(){
        return(
            <div>
                <Hero />
                <Nav />
            </div>
        );
    }
}

export default App;