import React from 'react';
import styles from "./Users.module.css";
import defaultAvatar from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";


export let Users = (props) => {
    // debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles._}>
            <p>Users</p>
            <ul className={styles._paginationList}>
                {pages.map(page => {
                    return (
                        <li>
                            <button className={props.currentPage === page && styles._paginationItem__selected}
                                    onClick={(e) => {
                                        props.onPaginationClick(page);
                                    }}>
                                {page}
                            </button>
                        </li>
                    )
                })}
            </ul>
            <ul>
                {props.users.map(user => {
                    // debugger
                    return (
                        <li className={styles._user}>
                            <div className={styles._userAvatar}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : defaultAvatar} alt=""/>
                                </NavLink>

                                {user.followed
                                    ? <button disabled={props.APIInProgress.some(id => id === user.id)}
                                              onClick={() => {props.unfollow(user.id);}}
                                              className={styles._userFollowStatus}>
                                        Unfollow</button>

                                    : <button disabled={props.APIInProgress.some(id => id === user.id)}
                                              onClick={() => {props.follow(user.id);}}
                                              className={styles._userFollowStatus}>
                                        Follow</button>
                                }
                            </div>
                            <div className={styles._userInfo}>
                                <div className={styles._userMainInfo}>
                                    <p>{user.name}</p>
                                    <div className={styles._userLocation}>
                                        <p>{"user.location.country"}</p>
                                        <p>{"user.location.city"}</p>
                                    </div>
                                </div>
                                <p>{user.status != null ? user.status : "YoYoYo"}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}
