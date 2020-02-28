import React from "react";
import ReactDOM from "react-dom";
import { IncreaseCounterButton } from './increase_counter_button';

class App extends React.Component {
  globalCounter = 0;

  constructor(props) {
    super(props);

    this.state = {
      count: 10
    };
  }

  increaseCounter(){
    this.globalCounter++;
    this.setState({
      count: this.globalCounter,
    });
  }

  decreaseCounter(){
    this.globalCounter--;
    this.setState({
      count: this.globalCounter,
    });
  }

  render() {
    return (
      <div>
        <IncreaseCounterButton handleClick={() => this.increaseCounter()} />
        <DecreaseCounterButton handleClick={() => this.decreaseCounter()}


        <CounterDisplay number={this.state.count}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
