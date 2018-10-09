import React, { Component } from 'react';
import './App.css';

import VisibleFeedItems from "./containers/VisibleFeedItems";
import TestSelector from "./components/TestSelector";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TestSelector/>
          <VisibleFeedItems/>
        </header>
      </div>
    );
  }
}

export default App;
