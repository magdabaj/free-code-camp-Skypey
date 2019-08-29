import user from "./userReducer";
import contacts from './contactsReducer'
import activeUserId from './activeUserIdReducer';
import messages from './messagesReducer';
import typing from './typingReducer';
import {combineReducers} from "redux";

export default combineReducers({
    user,
    contacts,
    activeUserId,
    messages,
    typing
})