import React, { Component } from "react";
import Header from "./Header.jsx";
import TweetsContainer from "../containers/TweetsContainer.jsx";

export default class Background extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={flexContainer}>
          <TweetsContainer />
        </div>
      </div>
    );
  }
}

const backgroundStyle = {
  width: "auto",
  height: "900px",
  backgroundColor: "#ededed"
};
const flexContainer = {
  display: "flex",
  flexWrap: "wrap"
};
