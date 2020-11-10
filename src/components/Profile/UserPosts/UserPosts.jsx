import React from 'react';

export const UserPosts = (props) => {
    return (
        <div className={"MyPosts"}>
            <p className={"MyPosts__title"}>My posts</p>
            <form>
                <textarea onChange={props.updateNewPostText} value={props.newPostText}/>
                <button type={"button"} onClick={props.addPost}>Add post</button>
            </form>
            <ul>
                {props.postsElements}
            </ul>
        </div>
    );
}

