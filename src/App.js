import React, { Component } from "react";
import { subscribeToTimer } from "./api";

class App extends Component {
  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp,
      })
    );
  }

  state = {
    timestamp: "no timestamp yet",
  };

  render() {
    const paragrafStyle = {
      display: "flex",
      justifyContent: "center",
      marginTop: "200px",
      fontSize: "25px",
    };

    return (
      <div>
        <p style={paragrafStyle}>
          This is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
