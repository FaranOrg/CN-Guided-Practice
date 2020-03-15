import React from "react";
import ReactDOM from "react-dom";
import {data} from './data';
import {Post} from './post';

const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

class App extends React.Component {
 
  render() {
    return <div style={rootStyle}>
    {data.map((post) => {
      return <Post data={post}></Post>
    })}
  </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
