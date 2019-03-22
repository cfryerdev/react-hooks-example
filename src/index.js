import React, { Component } from "react";
import { render } from "react-dom";
import SimpleExample from "./components/SimpleExample";
import CustomExample from "./components/CustomExample";

const bodyStyle = {
  fontFamily: "Verdana",
  padding: 10
};

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={bodyStyle}>
        <SimpleExample />
        <hr style={{ marginTop: 40, marginBottom: 40 }} />
        <CustomExample />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
