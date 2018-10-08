import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add([faStroopwafel, faArrowDown]);

import Hero from './container/HeroContainer.js'

class App extends Component {
    render(){
        return(
            <div>
                <Hero />
            </div>
        );
    }
}

export default App;