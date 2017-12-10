import * as PlayerActionsTypes from '../actiontypes/player';

const initialState = [
    {
        name: 'Jim Hoskins',
        score: 31,
    },
    {
        name: 'Andrew Chalkley',
        score: 20,
    },
    {
        name: 'Alena Holligan',
        score: 50,
    },
];

export default function Player(state=initialState, action) {
    switch(action.type) {
        case PlayerActionsTypes.ADD_PLAYER:
            return [
                ...state,
                {
                    name: action.name,
                    score: 0
                }
            ];
        case PlayerActionsTypes.REMOVE_PLAYER:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case PlayerActionsTypes.UPDATE_PLAYER_SCORE:
            return state.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score
                    }
                }
                return player;
            });
        default:
            return state;
    }
}
