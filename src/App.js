import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fakeData from './fake-data'
class App extends Component {
  render() {
    let {categories} = fakeData; 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          {/* catetories */}
          <div style={{display: 'flex', flexDirection: 'row'}}>
            {/* main categories */}
            <div style={{display: 'flex', flexDirection: 'column', width: 300}}>
              {categories.map((categ, index) => <div key={index}>{categ.display_name}</div>)}
            </div>
            {/* show sub categories */}
            <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
              <h1>What the heck What the heck What the heck What the heck</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
