import React from "react";
import {data} from './data';
import {Comment} from './comment';

const postStyle = {
    marginBottom: '50px',
};

class Post extends React.Component {
  render() {
    return (<div style={postStyle}>
      <img src={this.props.data.image} height="400px" width="400px"/>
      {this.props.data.comments.map((comment) => 
        {
            return <div><Comment comment={comment}/></div>}
        )}
    </div>);
  }
}

export {Post};
