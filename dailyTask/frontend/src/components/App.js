import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import Dashboard from './todos/Dashboard';
import store from '../store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
