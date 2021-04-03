import {addPostActionCreator, deletePost, profilePageReducer} from "./profile-page-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'First react'},
        {id: 3, message: 'Making of SPA'}
    ]
};

test('Posts length should be incremented', () => {
    // 1. start test data
    let action = addPostActionCreator('Test your work!');
    // 2. action
    let newState = profilePageReducer(state, action);
    // 3. expectations
    expect(newState.postsData.length).toBe(4);
});

test('New Post text should be correct', () => {
    // 1. start test data
    let action = addPostActionCreator('Test your work!');
    // 2. action
    let newState = profilePageReducer(state, action);
    // 3. expectations
    expect(newState.postsData[3].message).toBe('Test your work!');
});



test(`After deleting post length of messages should't be decrement if id is incorrect`, () => {
    // 1. start test data
    let action = deletePost(1000);
    // 2. action
    let newState = profilePageReducer(state, action);
    // 3. expectations
    expect(newState.postsData.length).toBe(3);
});


