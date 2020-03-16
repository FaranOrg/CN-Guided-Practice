import React from "react";

const userName = {
    fontWeight: 'bold',

};

class Comment extends React.Component {
  render() {
    return (<div >
        <span style={userName}>
            {
                //Display the username here
            }:
        </span>
        <span>
            {
                //Display the comment here.
            }
        </span>
    </div>);
  }
}

export {Comment};