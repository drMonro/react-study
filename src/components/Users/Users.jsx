import React from 'react';
import styles from "./Users.module.css";
import {UsersPaginator} from "./UsersPaginator";
import {User} from "./User";

export let Users = ({currentPage, onPaginationClick, totalUsersCount, pageSize, APIInProgress, follow, unfollow, users, ...props}) => {

    return (
        <div className={styles._}>
            <p>Users</p>
            <UsersPaginator currentPage={currentPage} onPaginationClick={onPaginationClick} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <ul>
                {
                    users.map(user => <User user={user} key={user.id} APIInProgress={APIInProgress} follow={follow} unfollow={unfollow}/>)
                }

            </ul>
        </div>
    )

}
