import React from 'react';
import './Friend.css';

export default function Friend({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg"  src={user.profilePicture} alt=""/>
            <span className="sidebarFriendInformation">
                <div className="sidebarFriendName">{user.fullname}</div>
                <div className="sidebarFriendUserName">@{user.username}</div>
            </span>
        </li>
    )
}