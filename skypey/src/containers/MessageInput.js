import React from 'react';
import store from '../redux/store';
import {sendMessage, setTypingValue} from '../redux/actions/messagesActions';
import './MessageInput.css';

const MessageInput = ({value}) => {

    const handleChange = (e) => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {typing, activeUserId} = store.getState();
        store.dispatch(sendMessage(typing, activeUserId));
    };

    return (
        <form className={"Message"} onSubmit={handleSubmit}>
            <input
                className={"Message__input"}
                onChange={handleChange}
                value={value}
                placeholder={"Write a message"}
            />
        </form>
    );
};

export default MessageInput;