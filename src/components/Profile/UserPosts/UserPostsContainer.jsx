import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-page-reducer";
import {UserPosts} from "./UserPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    let postsData = state.profilePage.postsData;

    return {
        postsData: postsData
    }
}

let mapDispatchToProps = (dispatch) => {
    let onAddPost = (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
    }

    return {
        addPost: onAddPost
    }
}

export const UserPostsContainer = connect(mapStateToProps, mapDispatchToProps)(UserPosts);
