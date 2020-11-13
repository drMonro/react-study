import React from 'react';
// import UserPosts from "./UserPosts/UserPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {UserPostsContainer} from "./UserPosts/UserPostsContainer";

export const Profile = (props) => {

    return (
        <div className="Profile">
            <ProfileInfo profile={props.profile}/>
            <UserPostsContainer/>
        </div>

    );
}

