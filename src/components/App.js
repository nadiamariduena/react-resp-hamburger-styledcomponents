import React, { Component } from "react";
import Navbar from "./nav/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="page">
          <div className="app">
            <h1>hello app</h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
