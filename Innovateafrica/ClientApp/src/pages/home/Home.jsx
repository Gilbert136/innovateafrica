import React from 'react';
import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from '../../components/feed/Feed';
import Ideas from '../../components/IdeaComponent/Ideas'
import Rightbar from "../../components/rightbar/Rightbar";


export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar/>
                {/* <Feed/> */}
                <Ideas/>
                <Rightbar/>
            </div>
        </>
    )
}