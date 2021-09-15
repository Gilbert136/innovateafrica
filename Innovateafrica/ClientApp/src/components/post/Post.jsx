import React, { useState } from 'react';
import './Post.css';
import { MoreVert, FavoriteBorder, SentimentDissatisfiedOutlined, ChatBubbleOutlineOutlined, AccountTreeOutlined, DescriptionOutlined } from "@material-ui/icons";
import { Users } from '../../dummyData';

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/Assets/person/1.jpeg" alt="" className="postProfileImg" />
                        {/* <img src={ Users.filter(x => x.id === post?.userId)[0].profilePicture } alt="" className="postProfileImg" /> */}

                        <span className="postUsername">{ Users.filter(x => x.id === post?.userId)[0].fullname }</span>
                        <span className="postDate">{ post.date }</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{ post?.desc }</span>
                    <img className="postImg" src="/Assets/post/environment.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="postlikes">
                            <span className="postlikesIcon" onClick={likeHandler}><FavoriteBorder /></span>
                            <span className="postlikestest">{ like }</span>
                        </div>
                        <div className="postlikes">
                            <span className="postlikesIcon" onClick={likeHandler}><SentimentDissatisfiedOutlined /></span>
                            <span className="postlikestest">{ like }</span>
                        </div>
                        <div className="postlikes">
                            <span className="postlikesIcon" onClick={likeHandler}><AccountTreeOutlined /></span>
                            <span className="postlikestest">{ like }</span>
                        </div>
                        <div className="postlikes">
                            <span className="postlikesIcon" onClick={likeHandler}><DescriptionOutlined /></span>
                            <span className="postlikestest">{ like }</span>
                        </div>
                    </div>
                    <div className="postBottomRight">
                        <div className="postlikes">
                            <span className="postlikesIcon" onClick={likeHandler}><ChatBubbleOutlineOutlined /></span>
                            <span className="postlikestest">{ post?.comment }</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}