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
                // Change return code to return a Comment component
                return <div>Shouldn't this be a Comment component?</div>
            }
        )}
    </div>);
  }
}

export {Post};