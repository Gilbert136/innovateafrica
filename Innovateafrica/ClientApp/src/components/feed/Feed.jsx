import React from 'react'
import './Feed.css';
import Share from '../share/Share';
import Overview from '../overview/Overview';
import Post from '../post/Post';
import { Posts } from '../../dummyData'

export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                {/* <Overview /> */}
                <Share />
                {Posts.map((p) => (<Post key={p.id} post={p} />))}
            </div>
        </div>
    )
}