import React from 'react';
import styles from "./Users.module.css";
import defaultAvatar from "../../assets/ava.jpg";
import {NavLink} from "react-router-dom";

export let User = ({user, APIInProgress, unfollow, follow}) => {

    return (
        <li className={styles._user}>
            <div className={styles._userAvatar}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : defaultAvatar} alt=""/>
                </NavLink>

                {user.followed
                    ? <button disabled={APIInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}
                              className={styles._userFollowStatus}>
                        Unfollow</button>

                    : <button disabled={APIInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}
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


}
