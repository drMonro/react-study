const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
     users: [

    ]
};

const _follow = (state, userID) => {
    return {
        ...state,
        users: state.users.map(user => {
            if (user.id === userID) {
                return {...user, followed: true}
            }
            return user;
        })
    };
};

const _unfollow = (state, userID) => {
    return {
        ...state,
        users: state.users.map(user => {
            if (user.id === userID) {
                return {...user, followed: false}
            }
            return user;
        })
    };
};

const _setUsers = (state, users) => {
    return {
        ...state,
        users: users
    }
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return _setUsers(state, action.users);
        case FOLLOW:
            return _follow(state, action.userID);
        case UNFOLLOW:
            return _unfollow(state, action.userID);
        default:
            return state
    }
}


export const followActionCreator = (userID) => ({
    type: FOLLOW,
    userID: userID
});

export const unfollowActionCreator = (userID) => ({
    type: UNFOLLOW,
    userID: userID
});

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users
});




// export const updateNewPostTextActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// })
