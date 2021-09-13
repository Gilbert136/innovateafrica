import React, { useState } from 'react';
import './Post.css';
import { MoreVert } from "@material-ui/icons";
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
                        <img src={ Users.filter(x => x.id === post?.userId)[0].profilePicture } alt="" className="postProfileImg" />
                        <span className="postUsername">{ Users.filter(x => x.id === post?.userId)[0].fullname }</span>
                        <span className="postDate">{ post.date }</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{ post?.desc }</span>
                    <img className="postImg" src="/assets/post/environment.jpeg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{ like }</span>
                        <img className="likeIcon" src="/assets/like.png" alt="" onClick={likeHandler} />
                        <span className="postLikeCounter">{ like }</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{ post?.comment } comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}