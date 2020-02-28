import React from "react";

class CounterDisplay extends React.Component {
  render() {
    return (
    <div>The current count is {this.props.number}</div>
    );
  }
}

export {CounterDisplay};
