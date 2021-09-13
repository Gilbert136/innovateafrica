import React, { useState } from 'react';
import { AssignmentOutlined, StarBorderOutlined } from "@material-ui/icons";
import Friend from '../friend/Friend';

import './Overview.css';

const PopularIdea = () => {
    return (
        <div className="overviewIdeasContent">
            <div className="overviewIdeasContentHeader">
                <div className="overviewIdeaHeaderLeft">
                    <span className="overviewIdeaHeaderLeftText">Fix telecommunication</span>
                </div>
                <div className="overviewIdeaHeaderRight">
                    <span className="overviewIdeaHeaderRightIcon"><StarBorderOutlined /></span>
                    <span className="overviewIdeaHeaderRightIcon"><StarBorderOutlined /></span>
                </div>
            </div>
            <div className="overviewIdeasContentBody">
                <span className="overviewIdeasContentBodyText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officiis earum architecto exercitationem? Sint, voluptas nesciu</span>
            </div>
            <div className="overviewIdeasContentFooter">
                <span className="overviewIdeasContentFooterTags">Science</span>
                <span className="overviewIdeasContentFooterTags">Education</span>
                <span className="overviewIdeasContentFooterTags">Religion</span>
            </div>
        </div>
    )
}

const IdeasOverview = () => {
    return (<div className="overviewCenterIdeaSection">
    <div className="overviewCenterIdeaHeader">
        <span className="overviewCenterIdeaHeaderText">Ideas</span>
    </div>
    <div className="overviewCenterIdeaInformation">
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">24</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas created</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">6</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas liked</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">0</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas disliked</span>
                </div>
            </span>
        </div>
    </div>
</div>
);
} 

const ImplementationOverview = () => {
    return ( <div className="overviewCenterIdeaSection">
    <div className="overviewCenterIdeaHeader">
        <span className="overviewCenterIdeaHeaderText">Implementations</span>
    </div>
    <div className="overviewCenterIdeaInformation">
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">24</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas created</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">6</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas liked</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">0</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas disliked</span>
                </div>
            </span>
        </div>
    </div>
</div>
)
}

const ProjectOverview = () => {
    return (                      <div className="overviewCenterIdeaSection">
    <div className="overviewCenterIdeaHeader">
        <span className="overviewCenterIdeaHeaderText">Projects</span>
    </div>
    <div className="overviewCenterIdeaInformation">
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">24</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas created</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">6</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas liked</span>
                </div>
            </span>
        </div>
        <div className="overviewCenterIdeaCreated">
            <span className="overviewCenterIdeaCreatedSection">
                <span className="overviewCenterIdeaCreatedIcon"><AssignmentOutlined /></span>
            </span>
            <span className="overviewCenterIdeaCreatedInformation">
                <div className="overviewCenterIdeaCreatedCount">
                    <span className="overviewCenterIdeaCreatedCountText">0</span>
                </div>
                <div className="overviewCenterIdeaCreatedDesc">
                    <span className="overviewCenterIdeaCreatedDescText">Ideas disliked</span>
                </div>
            </span>
        </div>
    </div>
</div>
)
}

export default function Overview() {
    return (
        <div className="overview">
            <div className="overvieWrapper">
                <div className="overviewStatistics">
                    <div className="overviewTop">
                        <div className="overviewTopLeft">
                            <h5>Innovation Statistics</h5>
                        </div>
                        <div className="overviewTopRight">
                            <div className="overviewTopRightFilter">
                                All time
                            </div>
                        </div>
                    </div>
                    <div className="overviewCenter">
                        <IdeasOverview />
                        <ImplementationOverview />
                        <ProjectOverview />
                    </div>
                </div>
                <hr className="overviewHr"/>
                <div className="overviewIdeas">
                    <div className="overviewTop">
                        <div className="overviewTopLeft">
                            <h5>Popular Ideas</h5>
                        </div>
                        <div className="overviewTopRight">
                            <div className="overviewTopRightFilter">
                                All time
                            </div>
                        </div>
                    </div>
                    <div className="overviewCenter">
                        <div className="overviewIdeasList">
                            <PopularIdea />
                            <PopularIdea />
                        </div>
                    </div>
                </div>
                <hr className="overviewHr"/>
                <div className="overviewIdeas">
                    <div className="overviewTop">
                        <div className="overviewTopLeft">
                            <h5>Profile Overview</h5>
                        </div>
                        <div className="overviewTopRight">
                            <Friend key={1} user={{
        id: 1,
        profilePicture: "assets/person/1.jpeg",
        username: "SafakKocaoglu",
        fullname: "Safak Kocaoglu",
    }}/>
                        </div>
                    </div>
                    <div className="overviewCenter">
                        <div className="overviewCenterProfileTop">
                            <div className="overviewCenterProfileImage">

                            </div>
                        </div>
                        <div className="overviewCenterProfileIdentities">
                            <div className="overviewProfileIdentityList">
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Username</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Username..." />
                                </div>
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Email</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Email..." />
                                </div>
                            </div>
                            <div className="overviewProfileIdentityList">
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Github</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Github link..." />
                                </div>
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Organization</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Organization..." />
                                </div>
                            </div>
                            <div className="overviewProfileIdentityList">
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Telephone</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Telephone..." />
                                </div>
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Country</label>
                                    <input type="text" className="overviewProfileIdentityInput" placeholder="Country..." />
                                </div>
                            </div>
                            <div className="overviewProfileIdentityList">
                                <div className="overviewProfileIdentity">
                                    <label htmlFor="" className="overviewProfileIdentityLabel">Bio</label>
                                    <textarea rows="5" type="text" className="overviewProfileIdentityInput" placeholder="Bio..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}