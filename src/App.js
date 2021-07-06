import React from "react";
import "./styles.css";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //It is equivalent to the above constructor method(state initialization)
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <h1>
          <SeasonDisplay />
        </h1>
      );
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>{this.state.errorMessage}</h1>;
    }
    return <h1>Loading..</h1>;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}
export default App;
