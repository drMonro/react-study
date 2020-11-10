const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'First react'},
        {id: 3, message: 'Making of SPA'}
    ],
    newPostText: 'kamasutra'
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

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
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
