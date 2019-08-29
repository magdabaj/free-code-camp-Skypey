import * as types from './actionTypes';

export const setActiveUserId = id => ({
    type: types.SET_ACTIVE_USER_ID,
    payload: id
})