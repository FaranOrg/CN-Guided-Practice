import React from "react";
import ReactDOM from "react-dom";
import fetchGIF from "./fetch-gif";

let apiKey = ""; // <-- add the API key from your slides

let searchTerm = ""; // <-- add a search term

class App extends React.Component {
  constructor(props) {
    super(props);
    /**
     * This is where your data starts and needs
     * to low down through your other components.
     */
    this.state = {
      imageUrl: null,
      error: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    fetchGIF(apiKey, searchTerm)
      .then((imageUrl) => {
        this.setState({imageUrl})
      })
      .catch((error) => {
        this.setState({error: true, errorMessage: error.message})
      })
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.errorMessage}</div>
    } else if (this.state.imageUrl) {
      return <Giphy imageUrl={this.state.imageUrl}/>;
    } else {
      return null;
    }
  }
}

/**
 * This is the component where your data will flow to.
 * Send the data down from the parent App component!
 */
function Giphy() {
  return <div>It looks like we have successfully loaded a gif... But why is not showing up here?! :)</div>;
}

/*
class Giphy extends React.Component {
  render() {
    return (
     <div>It looks like we have successfully loaded a gif... But why is not showing up here?! :)</div>;
    );
  }
}
*/

ReactDOM.render(<App />, document.getElementById("root"));
