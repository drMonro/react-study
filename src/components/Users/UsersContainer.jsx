import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, unfollow, toggleIsAPIProgress, requestUsers} from "../../redux/users-page-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {getAPIStatus, getCurrentPage, getFetchStatus, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";



class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPaginationClick = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPaginationClick={this.onPaginationClick}
                    APIInProgress={this.props.APIInProgress}
                />
            </>
        )
    };
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         APIInProgress: state.usersPage.APIInProgress
//     }
// }


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetchStatus(state),
        APIInProgress: getAPIStatus(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        getUsers: requestUsers,
        follow,
        unfollow,
        setCurrentPage,
        toggleIsAPIProgress
    })
)(UsersContainer)
