import React from 'react';
// import UserPosts from "./UserPosts/UserPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {UserPostsContainer} from "./UserPosts/UserPostsContainer";

const Profile = (props) => {

    return (
        <div className="Profile">
            <ProfileInfo/>
            <UserPostsContainer />
        </div>

    );
}

export default Profile;
