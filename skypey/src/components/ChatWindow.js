import React from 'react';
import "./ChatWindow.css";
import store from "../redux/store";
import Header from './Header';
import Chat from './Chat';
import MessageInput from '../containers/MessageInput';
import _ from 'lodash';


const ChatWindow = ({activeUserId}) => {
    // const state = store.getState();
    // const activeUser = state.contacts[activeUserId];
    const {contacts} = store.getState().contacts;
    const contactsArray = _.values(contacts);
    const activeUser = contactsArray.find(user => user.user_id === activeUserId);
    // console.log(contactsArray);
    // console.log("contacts", store.getState().contacts);
    // console.log("activeUserId", activeUserId);
    // console.log("active user object", store.getState().contacts[activeUserId]);
    console.log("active user object", activeUser);
    const messages = store.getState().messages;
    console.log(messages);
    const activeUserMessages = _.values(store.getState().messages[activeUserId]);
    console.log(activeUserMessages);
    const {typing} = store.getState();
    console.log("typing", typing);

    return(
        <div className={"ChatWindow"}>
            <Header user={activeUser}/>
            <Chat userMessages={activeUserMessages}/>
            <MessageInput value={typing}/>
        </div>
    )
};

export default ChatWindow;