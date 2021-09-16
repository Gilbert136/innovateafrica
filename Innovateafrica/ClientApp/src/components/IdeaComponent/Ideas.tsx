import React from 'react'
import './Ideas.css';
import { IdeaShare } from './IdeaShare/IdeaShare';
import IdeaView from './Idea/IdeaView';
import { Posts } from '../../dummyData'

export default function Ideas() {
    return (
        <div className="ideas">
            <div className="ideasWrapper">
                {/* <Overview /> */}
                <IdeaShare />
                {Posts.map((p) => (<IdeaView key={p.id} idea={p} />))}
            </div>
        </div>
    )
}