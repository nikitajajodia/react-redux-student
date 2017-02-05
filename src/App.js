import React, { Component } from 'react';
import './App.css';
import Students  from './Students';
import {
  Provider
} from 'react-redux';
import configureStore from './store';
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App container">
        <div className="App-header">
          <h2>List of Students</h2>
        </div>
        <Students />
      </div>
      </Provider>
    );
  }
}

export default App;
