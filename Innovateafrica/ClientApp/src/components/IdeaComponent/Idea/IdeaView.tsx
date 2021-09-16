import React, { useState } from 'react';
import './IdeaView.css';
import { MoreVert, FavoriteBorder, SentimentDissatisfiedOutlined, ChatBubbleOutlineOutlined, AccountTreeOutlined, DescriptionOutlined } from "@material-ui/icons";
import { Users } from '../../../dummyData';

export default function IdeaView({idea}: {idea: any}) {
    const [like, setLike] = useState(idea.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="idea">
            <div className="ideaWrapper">
                <div className="ideaTop">
                    <div className="ideaTopLeft">
                        <img src="/Assets/person/1.jpeg" alt="" className="ideaProfileImg" />
                        {/* <img src={ Users.filter(x => x.id === idea?.userId)[0].profilePicture } alt="" className="ideaProfileImg" /> */}

                        <span className="ideaUsername">{ Users.filter(x => x.id === idea?.userId)[0].fullname }</span>
                        <span className="ideaDate">{ idea.date }</span>
                    </div>
                    <div className="ideaTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="ideaCenter">
                    <span className="ideaText">{ idea?.desc }</span>
                    <img className="ideaImg" src="/Assets/idea/environment.jpeg" alt="" />
                </div>
                <div className="ideaBottom">
                    <div className="ideaBottomLeft">
                        <div className="idealikes">
                            <span className="idealikesIcon" onClick={likeHandler}><FavoriteBorder /></span>
                            <span className="idealikestest">{ like }</span>
                        </div>
                        <div className="idealikes">
                            <span className="idealikesIcon" onClick={likeHandler}><SentimentDissatisfiedOutlined /></span>
                            <span className="idealikestest">{ like }</span>
                        </div>
                        <div className="idealikes">
                            <span className="idealikesIcon" onClick={likeHandler}><AccountTreeOutlined /></span>
                            <span className="idealikestest">{ like }</span>
                        </div>
                        <div className="idealikes">
                            <span className="idealikesIcon" onClick={likeHandler}><DescriptionOutlined /></span>
                            <span className="idealikestest">{ like }</span>
                        </div>
                    </div>
                    <div className="ideaBottomRight">
                        <div className="idealikes">
                            <span className="idealikesIcon" onClick={likeHandler}><ChatBubbleOutlineOutlined /></span>
                            <span className="idealikestest">{ idea?.comment }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}