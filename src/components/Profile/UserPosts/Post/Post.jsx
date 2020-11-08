import React from 'react';

const Post = (props) => {
    return (
        <li className={"Post"}>{props.message}</li>
    );
}

export default Post;
