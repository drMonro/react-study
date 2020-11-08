import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-page-reducer";
import UserPosts from "./UserPosts";
import {StoreContext} from "../../../StoreContext";


const UserPostsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onNewPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }


                return <UserPosts updateNewPostText={onNewPostChange}
                                  addPost={onAddPost}
                                  postsData={state.profilePage.postsData}
                                  newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    );
}


export default UserPostsContainer;
