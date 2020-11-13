const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'First react'},
        {id: 3, message: 'Making of SPA'}
    ],
    newPostText: 'kamasutra',
    profile: null
};

const _updateNewPostText = (state, newText) => {
    return {
        ...state,
        newPostText: newText
    };
};

const _addPost = (state) => {
    return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, {id: 4, message: state.newPostText}]
    };
};

const _setUserProfile = (state, actionProfile) => {
    return {
        ...state,
        profile: actionProfile
    };
};

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return _setUserProfile(state, action.profile);
        case ADD_POST:
            return _addPost(state);
        case UPDATE_NEW_POST_TEXT:
            return _updateNewPostText(state, action.newText);
        default:
            return state
    }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile:profile
})
