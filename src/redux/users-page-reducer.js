const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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

const _setCurrentPage = (state, currentPage) => {
    return {
        ...state,
        currentPage: currentPage
    }
}

const _setTotalUsersCount = (state, totalUsersCount) => {
    return {
        ...state,
        totalUsersCount: totalUsersCount
    }
}

const _toggleIsFetching = (state, isFetching) => {
    return {
        ...state,
        isFetching: isFetching
    }
}

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
            return _toggleIsFetching(state, action.isFetching);
        case SET_CURRENT_PAGE:
            return _setCurrentPage(state, action.currentPage);
        case SET_TOTAL_USERS_COUNT:
            return _setTotalUsersCount(state, action.totalUsersCount);
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


export const follow = (userID) => ({
    type: FOLLOW,
    userID: userID
});

export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID: userID
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});
