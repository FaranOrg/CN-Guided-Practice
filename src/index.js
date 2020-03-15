import React from "react";
import ReactDOM from "react-dom";
import {data} from './data';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log(data);
  }
 
  render() {
    return (
      <div>
        I'm an empty page!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
