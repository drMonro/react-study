import React from 'react';
import styles from "./Users.module.css";


export const Users = (props) => {
    // debugger
    if (props.users.length === 0) {
        props.setUsers([
                {id: 1, imgLink: 'https://i.pinimg.com/236x/b6/f3/df/b6f3df08fdabce55174f1273a787ff9c.jpg?nii=t', followed: true, fullName: 'Olga', status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}},
                {id: 2, imgLink: 'https://i.pinimg.com/236x/4a/78/23/4a7823f2dac81dafe359a820dbd8b8b7.jpg', followed: false, fullName: 'Alex', status: 'I am boss too', location: {city: 'Krasnoyarsk', country: 'Russia'}},
                {id: 3, imgLink: 'https://i.pinimg.com/236x/e5/ba/e7/e5bae703c2f9e8f6a9f482105ee8a125.jpg', followed: false, fullName: 'Ray', status: 'I am game developer', location: {city: 'London', country: 'Great Britain'}}
            ]
        )
    }

    return (
        <div className={styles._}>
            <p>Users</p>
            <ul>
                {props.users.map(user => {

                    return (
                        <li className={styles._user}>
                            <div className={styles._userAvatar}>
                                <img src={user.imgLink} alt=""/>

                                {user.followed
                                    ? <button onClick={() => props.unfollow(user.id)} className={styles._userFollowStatus}>Unfollow</button>
                                    : <button onClick={() => props.follow(user.id)} className={styles._userFollowStatus}>Follow</button>
                                }


                            </div>
                            <div className={styles._userInfo}>
                                <div className={styles._userMainInfo}>
                                    <p>{user.fullName}</p>
                                    <div className={styles._userLocation}>
                                        <p>{user.location.country}</p>
                                        <p>{user.location.city}</p>
                                    </div>
                                </div>
                                <span>{user.status}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>

        </div>

    );
}

