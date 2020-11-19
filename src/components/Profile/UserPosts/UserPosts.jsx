import React from 'react';
import {AddPostFormContainer} from "./AddPostForm/AddPostFormContainer";






export const UserPosts = (props) => {

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={"MyPosts"}>
            <p className={"MyPosts__title"}>My posts</p>

            <AddPostFormContainer onSubmit={onAddPost}/>

            <ul>
                {props.postsElements}
            </ul>
        </div>
    );
}

