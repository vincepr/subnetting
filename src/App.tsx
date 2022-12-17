import React from 'react';
import './App.css';
import { IpGame } from './components/IpGame';

class App extends React.Component {
  state = {
    mssg: ""
  };

  handleClick = () => {
    // to "reload" we refresh the state
    this.setState({ mssg: "State changed" })
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>reload app</button>
        <div>{this.state.mssg}</div>

        <IpGame/>
      </>
    );
  }
}


export default App;
