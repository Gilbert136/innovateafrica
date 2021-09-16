import React from 'react'
import './IdeaShare.css';

export const IdeaShare = function () {
    return (
        <div className="IdeaShare">
            <div className="IdeaShareWrapper">
                <div className="IdeaShareTop">
                    <img src="/Assets/person/1.jpeg" alt="" className="IdeaShareProfileImg" />
                    <textarea placeholder="Will you like to IdeaShare your ideas with us?" className="IdeaShareInput" rows={2} />
                </div>
                <div className="IdeaShareBottom">
                    <div className="IdeaShareOptions">
                    </div>
                </div>
            </div>
        </div>
    )
}
