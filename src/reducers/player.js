import * as PlayerActionsTypes from '../actiontypes/player';

const initialState = {
    players: [{
        name: 'Jim Hoskins',
        score: 31,
        created: '11/2/2017',
        updated: '22/9/2017',
    },
    {
        name: 'Andrew Chalkley',
        score: 20,
        created: '11/2/2017',
        updated: '22/9/2017',
    },
    {
        name: 'Alena Holligan',
        score: 50,
        created: '11/2/2017',
        updated: '22/9/2017',
    }],
    selectedPlayerIndex: -1
};

export default function Player(state=initialState, action) {

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    switch(action.type) {
        case PlayerActionsTypes.ADD_PLAYER: {
            const addPlayerList = [...state.players, {
                name: action.name,
                score: 0,
                created: `${month}/${date}/${year}`
            }];

            return {
                ...state,
                players: addPlayerList
            };

        }
        case PlayerActionsTypes.REMOVE_PLAYER: {
            const removePlayerList = [
                ...state.players.slice(0, action.index),
                ...state.players.slice(action.index + 1)
            ];

            return {
                ...state,
                players: removePlayerList
            };
        }
            
        case PlayerActionsTypes.UPDATE_PLAYER_SCORE: {

            const updatePlayerList =  state.players.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + action.score,
                        created: `${month}/${date}/${year}`
                    }
                }
                return player;
            });

            return {
                ...state,
                players: updatePlayerList
            };
        }
            
        
        case PlayerActionsTypes.SELECT_PLAYER:
            return {
                ...state,
                selectedPlayerIndex: action.index
            };

        default:
            return state;
    }
}
