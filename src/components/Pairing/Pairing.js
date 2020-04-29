import React, { Component } from "react";
import "./Pairing.css";
import axios from "axios";

class Pairing extends Component {
  constructor() {
    super();
    this.state = {
      pair: [],
    };
  }
  //   info = () => {
  //     axios.get("https://api.punkapi.com/v2/beers").then((items) => {
  //       console.log(items.data);
  //     });
  //   };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((items) => {
      this.setState({ pair: items.data }, () => {
        console.log("data....", this.state.pair);
      });
    });
  }

  render() {
    console.log(" check to see if passed", this.state.pair);
    return (
      <div className="pairing">
        {this.state.pair.map((apiData) => {
          return (
            <div>
              <p> Pair with:</p>
              <p>{apiData.food_pairing}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pairing;
