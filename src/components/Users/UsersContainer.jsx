import React from 'react';
import {connect} from "react-redux";
import {Users} from "../Users/Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-page-reducer";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    let onFollowClick = (userID) => {
        console.log('folow')

        dispatch(followActionCreator(userID));
    }

    let onUnfollowClick = (userID) => {
        console.log('unfolow')

        dispatch(unfollowActionCreator(userID));
    }

    let setUsers = (users) => {
        dispatch(setUsersActionCreator(users));
    }


    return {
        follow: onFollowClick,
        unfollow: onUnfollowClick,
        setUsers: setUsers,
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
