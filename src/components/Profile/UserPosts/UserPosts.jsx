import React from 'react';
import {AddPostFormContainer} from "./AddPostForm/AddPostFormContainer";
import styles from "./UserPosts.module.css";
import Post from "./Post/Post";


export const UserPosts = React.memo(props => {
    console.log("YO")

    let postsElements =
        props.postsData.map(message => <Post message={message.message} key={message.id}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles._}>
            <p className={styles._title}>My posts</p>

            <AddPostFormContainer onSubmit={onAddPost}/>

            <ul>
                {postsElements}
            </ul>
        </div>
    );
});

