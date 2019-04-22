import { combineReducers } from 'redux';

const meuPrimeiroReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case clientActions.SET_CLIENTS:
            return { ...state, nome: action.payload }
    
        default:
            state;
    }
}



export default reducer;
