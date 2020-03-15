import React from "react";

const userName = {
    fontWeight: 'bold',

};

class Comment extends React.Component {
  render() {
    return (<div >
        <span style={userName}>{this.props.comment.user}:</span>
        <span>{this.props.comment.comment}</span>
    </div>);
  }
}

export {Comment};