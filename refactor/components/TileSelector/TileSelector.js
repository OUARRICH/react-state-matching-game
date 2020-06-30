import React, {useContext} from 'react'
import useHover from '../../hooks'
import './TileSelector.css'
import GameContext from '../../GameContext.js';



const TileSelector = () => {
  const context = useContext(GameContext);
  const [ref, hovered] = useHover();
  const dropdown = hovered ? (
    <div className='tileSelectorContent' >
      <div className='number' onClick={() => context.handleNumTileChange(4)}>4</div>
      <div className='number' onClick={() => context.handleNumTileChange(16)}>16</div>
      <div className='number' onClick={() => context.handleNumTileChange(36)}>36</div>
    </div>
  ) : null;

  return (
  <div className='tileSelector'>
    <div>Number of Tiles</div>
    <div className='tileSelectorDropdown' ref={ref}>
        {context.numTiles}
        {dropdown}
    </div>
  </div>
  )
      
 
}

export default TileSelector
