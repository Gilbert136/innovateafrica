import React from 'react'
import './Sidebar.css';
import { FolderOpenOutlined, AccountTreeOutlined, ImportContactsOutlined, LocalFloristOutlined, InsertChartOutlinedOutlined, Event } from '@material-ui/icons';
import { Users } from '../../dummyData';
import Friend from '../friend/Friend';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ImportContactsOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Overview</span>
                    </li>
                    <li className="sidebarListItem">
                        <LocalFloristOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Ideas</span>
                    </li>
                    <li className="sidebarListItem">
                        <AccountTreeOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Implementation</span>
                    </li>
                    <li className="sidebarListItem">
                        <InsertChartOutlinedOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Projects</span>
                    </li>
                    <li className="sidebarListItem">
                        <FolderOpenOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Documents</span>
                    </li>
                </ul>
                {/* <button className="sidebarButton"> Show More</button> */}
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(x => (<Friend key={x.id} user={x}/>))}
                </ul>
                <hr className="sidebarHr"/>
             </div>
        </div>
    )
}