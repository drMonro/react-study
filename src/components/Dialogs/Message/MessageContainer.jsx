import React from 'react';
import styles from "./Message.module.css";

export const MessageContainer = (props) => {
    return (
        <li>
            <div className={styles._info}>
                <img className={styles._avatar} src="https://iphone-image.apkpure.com/v2/app/f/a/e/faefbfc9a2b01d26833aaa150fe011c7.jpg" alt=""/>
                <span>{props.name}</span>
            </div>
            <p className={styles._text}>
                <span>{props.message}</span>
            </p>
        </li>
    );
}

