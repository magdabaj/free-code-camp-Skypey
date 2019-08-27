import user from "./userReducer";
import contacts from './contactsReducer'
import activeUserId from './activeUserIdReducer';
import {combineReducers} from "redux";

export default combineReducers({
    user,
    contacts,
    activeUserId
})