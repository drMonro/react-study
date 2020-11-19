import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_API_PROGRESS = 'TOGGLE_IS_API_PROGRESS';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    APIInProgress: []

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

const _toggleIsAPIProgress = (state, isAPI, userID) => {
    return {
        ...state,
        APIInProgress: isAPI
            ? [...state.APIInProgress, userID]
            : state.APIInProgress.filter(id => id !== userID)
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
        case TOGGLE_IS_API_PROGRESS:
            return _toggleIsAPIProgress(state, action.isAPI, action.userID);
        default:
            return state
    }
}


export const followSuccess = (userID) => ({
    type: FOLLOW,
    userID: userID
});

export const unfollowSuccess = (userID) => ({
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

export const toggleIsAPIProgress = (isAPI, userID) => ({
    type: TOGGLE_IS_API_PROGRESS,
    isAPI: isAPI,
    userID: userID
});


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsAPIProgress(true, userId))

        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsAPIProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsAPIProgress(true, userId))

        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsAPIProgress(false, userId))
            });
    }
}
