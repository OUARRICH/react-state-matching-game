import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles, indexOfSelected } from '../../misc/utils'

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
      tiles: createTiles(this.state.numTiles, this.handleTileClicked)
    }));
  }

  handleTileClicked = (id, color) =>  {
    this.setState(state => {
      const tiles = this.state.tiles;
      let toBeCleared = this.state.toBeCleared;
      const selectedTileIndex = indexOfSelected(tiles, id, color);
      let previousTileIndex = this.state.previousTileIndex;

      if(toBeCleared !== null) {
        tiles[toBeCleared[0]].selected = false;
        tiles[toBeCleared[1]].selected = false;
        toBeCleared = null;
      }
      tiles[selectedTileIndex].selected = true;

      if(previousTileIndex !== null){
        let previousTile = tiles[previousTileIndex];
        let selectedTile = tiles[selectedTileIndex];
        if(previousTile.id !== selectedTile.id && previousTile.color === color){
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;
        }else{
          toBeCleared = [previousTileIndex, selectedTileIndex];
          previousTileIndex = null;
        }
      }else {
        previousTileIndex = selectedTileIndex;
      }

      return {
        tiles,
        toBeCleared,
        previousTileIndex 
      };
    });
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
