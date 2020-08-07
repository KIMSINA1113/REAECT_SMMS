import React, { Component } from 'react';
import { Header } from './components';
//import { Listcontainer } from './container';
//import { Maincontainer } from './container';
import { Registercontainer, Listcontainer } from './container';



class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Registercontainer/>
            </div>
        );
    }
}

// <Maincontainer/>
//<Listcontainer/>
export default App;