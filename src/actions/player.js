import * as PlayerActionsTypes from '../actiontypes/player';

export const addPlayer = name => {
    return {
        type: PlayerActionsTypes.ADD_PLAYER,
        name
    }
}

export const removePlayer = index => {
    return {
        type: PlayerActionsTypes.REMOVE_PLAYER,
        index
    }
}

export const updatePlayerScore = (index, score) => {
    return {
        type: PlayerActionsTypes.UPDATE_PLAYER_SCORE,
        index,
        score
    }
}