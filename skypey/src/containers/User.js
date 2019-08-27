import React from "react";
import "./User.css";

const User = ({user}) => {
    return (
        <div className={"User"}>
            <img src={user.profile_pic} alt={user.name} className={"User__pic"}/>
            <div className={"User__details"}>
                <p className={"User__details-name"}>{user.name}</p>
                <p className={"User__details-status"}>{user.status}</p>
            </div>
        </div>
    )
};

export default User;