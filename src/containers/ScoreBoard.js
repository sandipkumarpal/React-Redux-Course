import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PlayerActionsCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';
import PlayerDetails from '../components/PlayerDetails';

class ScoreBoard extends React.Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {

    const {dispatch, players, selectedPlayerIndex} = this.props;
    const addPlayer = bindActionCreators(PlayerActionsCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionsCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionsCreators.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionsCreators.selectPlayer, dispatch);

    let selectedPlayer;
    if(selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetails selectedPlayer={selectedPlayer}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
}

export default connect(mapStateToProps)(ScoreBoard);
  