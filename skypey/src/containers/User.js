import React from "react";
import "./User.css";
import {setActiveUserId} from '../redux/actions/activeUserIdActions';
import store from '../redux/store';

const User = ({user}) => {
    function handleUserClick({user_id}){
        store.dispatch(setActiveUserId(user_id));
        // console.log(user_id)
    }
    return (
        <div className={"User"} onClick={handleUserClick.bind(null, user)}>
            <img src={user.profile_pic} alt={user.name} className={"User__pic"}/>
            <div className={"User__details"}>
                <p className={"User__details-name"}>{user.name}</p>
                <p className={"User__details-status"}>{user.status}</p>
            </div>
        </div>
    )
};

export default User;