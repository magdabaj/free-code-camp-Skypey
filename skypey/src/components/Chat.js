import React from 'react';
import "./Chat.css";
import {deleteMessage, getMessage} from "../redux/actions/messagesActions";
import store from '../redux/store';

const Chats = ({message}) => {
    const {text, is_user_msg, number} = message;
    const {activeUserId} = store.getState();

    const handleClick = () => {
        store.dispatch(getMessage(message.text));
    };
    console.log("message", message);
    console.log("number", number);
    console.log("active user id", activeUserId);

    const handleDelete = () => {
        store.dispatch(deleteMessage(message.number, activeUserId));
    };

    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>
            <span  onClick={handleClick}>
                {text}
            </span>
            <div className={"delete"} onClick={()=>handleDelete()}>Delete</div>
        </span>
    );
};

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    };

    render() {
        return(
            <div className={"Chats"} ref={this.chatsRef} >
                {this.props.userMessages.map(message => (
                    <Chats message={message} key={message.number}/>
                    )
                )}
            </div>
        )
    }
}

export default Chat;

// const Chat = ({userMessages}) => {
//     return (
//         <div className={"Chats"}>
//             {userMessages.map((message) => (
//                 message.is_user_msg
//                     ? <span className={'Chat is-user-msg'} key={message.number}>{message.text}</span>
//                     : <span className={'Chat '} key={message.number}>{message.text}</span>
//                 )  )}
//         </div>
//     )
// };
//
// export default Chat;
//

