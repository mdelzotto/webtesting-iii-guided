import React, { Component } from 'react';
import Speaker from './Speaker';

import './App.css';

class App extends Component {
  state = {
    message: 'nothing to say'
  };
  render() {
    return (
      <div className="App">
        <Speaker speak={this.speak} message={this.state.message} />
      </div>
    );
  }

  speak = () => {
    this.setState({ message: 'you are not mocking me' });
  };
}

export default App;
