import React, { Component } from "react";
import "./Sidebar.css";
import axios from "axios";
import Body from "../Body/Body";
import Pairing from "../Pairing/Pairing";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }
  //   info = () => {
  //     axios.get("https://api.punkapi.com/v2/beers").then((items) => {
  //       console.log(items.data);
  //     });
  //   };

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((items) => {
      this.setState({ images: items.data }, () => {
        console.log("data....", this.state.images);
      });
    });
  }

  render() {
    console.log(" check to see if passed", this.state.images);
    return (
      <div className="sideBar">
        <div className="test">
          {this.state.images.map((images) => {
            return <img src={images.image_url} alt="..."></img>;
          })}
        </div>
        <div>
          <Body />
        </div>
        <div>
          <Pairing />
        </div>
      </div>
    );
  }
}

export default Sidebar;
