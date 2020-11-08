import React from 'react';
import styles from "./Recipient.module.css";
import {NavLink} from "react-router-dom";

export const Recipient = (props) => {
    return (
        <li className={styles._recipient}>
            <NavLink to={props.path}>{props.name}</NavLink>
        </li>
    );
}

