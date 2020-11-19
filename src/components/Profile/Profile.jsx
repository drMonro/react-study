import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {UserPostsContainer} from "./UserPosts/UserPostsContainer";

export const Profile = (props) => {
    return (
        <div className="Profile">
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <UserPostsContainer/>
        </div>

    );
}

