import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

export class App extends Component {
  render() {
    return <h1>Test</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
