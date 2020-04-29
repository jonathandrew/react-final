import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="box">
        <Header />
        <Sidebar />
      </div>
    );
  }
}
export default App;
