import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

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
        users: updateObjectInArray(state.users, userID, "id", {followed: true})
    };
};

const _unfollow = (state, userID) => {
    return {
        ...state,
        users: updateObjectInArray(state.users, userID, "id", {followed: false})
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


export const requestUsers = (requestPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await usersAPI.getUsers(requestPage, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsAPIProgress(true, userId))

    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        console.log(actionCreator)
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsAPIProgress(false, userId))
};

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess)

    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess)

    }
}
