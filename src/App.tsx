import React from 'react';
import './App.css';
import { IpGame } from './components/IpGame';

export default class App extends React.Component {
  // State to store the current game in -> overwrite it to create new instance of the game
  state= {
    game: ()=> <IpGame/>
  }

  handleClick = () => {
    // to "reload" we refresh the state by putting a new game-instance in it
    this.setState({game: ()=> <IpGame/> })
  };

  render() {
    const CurrentGameInstance = this.state.game
    return (
      <>
        <CurrentGameInstance/>
        <button onClick={this.handleClick}>Next Question</button>
      </>
    )
  }
}