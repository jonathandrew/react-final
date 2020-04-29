import React, { Component } from "react";
import "./Body.css";
import axios from "axios";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      information: [],
    };
  }
  //   info = () => {
  //     axios.get("https://api.punkapi.com/v2/beers").then((items) => {
  //       console.log(items.data);
  //     });
  //   };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((items) => {
      this.setState({ information: items.data }, () => {
        console.log("data....", this.state.information);
      });
    });
  }

  render() {
    console.log(" check to see if passed", this.state.information);
    return (
      <div className="body">
        {this.state.information.map((apiData) => {
          return (
            <div>
              <p>{apiData.name}</p>
              <p> Description:{apiData.description}</p>
              <p> Tips: {apiData.brewers_tips}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Body;
