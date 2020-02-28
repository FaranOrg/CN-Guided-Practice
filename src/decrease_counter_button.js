import React from "react";

class DecreaseCounterButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>Decrease the count!</button>
    );
  }
}

// Remove me
export {DecreaseCounterButton};
