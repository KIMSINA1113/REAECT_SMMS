import React, { Component } from 'react';
import { Maincontainer } from './container';
import { Header } from './components';
class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Maincontainer/>
            </div>
        );
    }
}

export default App;