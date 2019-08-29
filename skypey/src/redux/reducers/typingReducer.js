import * as types from '../actions/actionTypes';

export default function typing(state="", action) {
    switch (action.type) {
        case types.SET_TYPING_VALUE:
            return action.payload;
        case types.SEND_MESSAGE:
            return "";
        case types.GET_MESSAGE:
            return action.payload;
        case types.DELETE_MESSAGE:
            return "";
        default:
            return state;
    }
}