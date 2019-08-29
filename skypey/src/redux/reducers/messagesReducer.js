import {getMessages} from "../../static-data";
import * as types from '../actions/actionTypes';
import _ from 'lodash';

export default (state = getMessages(20), action) => {
    switch (action.type) {
        case types.SEND_MESSAGE:
            const {message, userId} = action.payload;
            const allUserMsgs = state[userId];
            const number = +_.keys(allUserMsgs).pop() + 1; // increasing the last number of array by 1

            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        case types.DELETE_MESSAGE:
            const {messageNumber, activeUserId} = action.payload;
            const allMsgs = _.cloneDeep(state[activeUserId]);
             delete allMsgs[messageNumber];

            return {
                ...state,
                [activeUserId]: {
                    ...allMsgs
                }

            };
        default:
            return state;
    }
}