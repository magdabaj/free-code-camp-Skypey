import * as types from './actionTypes';

export const setTypingValue = value => ({
    type: types.SET_TYPING_VALUE,
    payload: value
});

export const sendMessage = (message, userId) => ({
    type: types.SEND_MESSAGE,
    payload: {
        message,
        userId
    }
});

export const getMessage = (text) => ({
    type: types.GET_MESSAGE,
    payload: text
});

export const deleteMessage = (messageNumber, activeUserId) => ({
    type: types.DELETE_MESSAGE,
    payload: {
        messageNumber,
        activeUserId
    }
});