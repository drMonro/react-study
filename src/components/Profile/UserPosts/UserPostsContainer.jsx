import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-page-reducer";
import {UserPosts} from "./UserPosts";
import {connect} from "react-redux";
import Post from "./Post/Post";


let mapStateToProps = (state) => {
    let postsElements = state.profilePage.postsData
        .map(message => {
                return <Post message={message.message} key={message.id}/>
            }
        );

    return {
        postsElements: postsElements
        // newPostText: state.profilePage.newPostText
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
