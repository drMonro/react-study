import {profileAPI, usersAPI} from "../api/api";
import {setAuthUserDataActionCreator} from "./auth-reducer";

const ADD_POST = 'ADD_POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'First react'},
        {id: 3, message: 'Making of SPA'}
    ],
    // newPostText: 'kamasutra',
    profile: null,
    status: ''
};

const _addPost = (state, newPostText) => {
    return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, {id: 4, message: newPostText}]
    };
};

const _setUserProfile = (state, actionProfile) => {
    return {
        ...state,
        profile: actionProfile
    };
};

const _setStatus = (state, actionStatus) => {
    return {
        ...state,
        status: actionStatus
    };
};

const _deletePost = (state, postId) => {
    return {
        ...state,
        postsData: state.postsData.filter(post => post.id !== postId)
    };
};


export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return _setUserProfile(state, action.profile);
        case ADD_POST:
            return _addPost(state, action.newPostText);
        case DELETE_POST:
            return _deletePost(state, action.postId);
        case SET_STATUS:
            return _setStatus(state, action.status);
        default:
            return state
    }
}


export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText: newPostText
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId: postId
})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));

}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


