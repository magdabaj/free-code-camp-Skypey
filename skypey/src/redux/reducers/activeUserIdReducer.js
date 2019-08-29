import * as types from '../actions/actionTypes';

export default (state = null, action) => {
    switch(action.type) {
        case types.SET_ACTIVE_USER_ID:
            return action.payload;
        default:
            return state
    }
}