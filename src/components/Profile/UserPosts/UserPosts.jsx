import React from 'react';
import Post from "./Post/Post";


const UserPosts = (props) => {

    let PostsElements = props.postsData
        .map(message => {
                return <Post message={message.message}/>
            }
        );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // debugger
        props.addPost();
    }

    let onNewPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={"MyPosts"}>
            <p className={"MyPosts__title"}>My posts</p>
            <form>
                <textarea onChange={onNewPostChange} ref={newPostElement} value={props.newPostText}/>
                <button type={"button"} onClick={onAddPost}>Add post</button>
            </form>
            <ul>
                {PostsElements}
            </ul>
        </div>
    );
}


export default UserPosts;
