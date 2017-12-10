import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const PlayerDetails = ({selectedPlayer}) => {
    if(selectedPlayer) {
        return (
            <div>
              <h3>{selectedPlayer.name}</h3>
              <ul>
                <li><span>Score: </span> {selectedPlayer.score}</li>
                <li><span>Created: </span> {selectedPlayer.created}</li>
                <li><span>Updated: </span> {selectedPlayer.updated}</li>
              </ul>
            </div>
          );
    } else {
        return (<p>No Player Informations</p>);
    }
  }
  
  PlayerDetails.propTypes = {
    selectedPlayer: PropTypes.object
  };

  export default PlayerDetails;