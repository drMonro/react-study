const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const _addPost = (state) => {
    let newPost = {
        id: 4,
        message: state.newPostText
    };

    state.postsData.push(newPost);
    state.newPostText = '';
};

const _updateNewPostText = (state, newText) => {
    state.newPostText = newText;
};

let initialState = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'First react'},
        {id: 3, message: 'Making of SPA'}
    ],
    newPostText: 'kamasutra'
};

export const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            _addPost(state);
            return state

        case UPDATE_NEW_POST_TEXT:
            _updateNewPostText(state, action.newText);
            return state
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
