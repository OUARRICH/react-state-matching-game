import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles} from '../../misc/utils'

import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      numTiles: 36,
      previousTileIndex: null,
      playing: false,
      toBeCleared: null,
      tiles: []
    };
  }

  startGame = () => {
    this.setState(state => ({
      playing: true,
      previousTileIndex: null,
      toBeCleared: null,
      tiles: createTiles(this.state.numTiles)
    }));
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel 
          numTiles={this.state.numTiles}
          playing={this.state.playing}
          startGame={this.startGame}
        />
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles}/>
      }
    </div>
  );

  }
}

export default App;
