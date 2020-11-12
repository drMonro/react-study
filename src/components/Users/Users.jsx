import React from 'react';
import styles from "./Users.module.css";
import * as axios from "axios";
import defaultAvatar from "../../assets/ava.jpg"

export class Users extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    // }
    componentDidMount() {
        this.getUsers();
    }

    getUsers () {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render () {
        return (
            <div className={styles._}>
                <p>Users</p>
                <ul>
                    {this.props.users.map(user => {
                        return (
                            <li className={styles._user}>
                                <div className={styles._userAvatar}>
                                    <img src={user.photos.small != null ? user.photos.small : defaultAvatar} alt=""/>
                                    {user.followed
                                        ? <button onClick={() => this.props.unfollow(user.id)} className={styles._userFollowStatus}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(user.id)} className={styles._userFollowStatus}>Follow</button>
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
        );
    };
}
