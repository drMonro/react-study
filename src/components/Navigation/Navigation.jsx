import React from 'react';
import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <nav className={styles._}>
            <ul className={styles._list}>
                <li>
                    <NavLink className={styles._link} activeClassName={styles.active} to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink className={styles._link} activeClassName={styles.active} to="/dialogs">Messages</NavLink>
                </li>
                <li>
                    <NavLink className={styles._link} activeClassName={styles.active} to="/profil">News</NavLink>
                </li>
                <li>
                    <NavLink className={styles._link} activeClassName={styles.active} to="/profil">Music</NavLink>
                </li>
                <li>
                    <NavLink className={styles._link} activeClassName={styles.active} to="/profil">Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
