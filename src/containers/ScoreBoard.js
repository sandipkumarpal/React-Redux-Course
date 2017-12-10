import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PlayerActionsCreators from '../actions/player';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';

class ScoreBoard extends React.Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
  }

  render() {

    const {dispatch,players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionsCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionsCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionsCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    ));

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state
  }
}

export default connect(mapStateToProps)(ScoreBoard);
  