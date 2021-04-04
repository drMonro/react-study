import React from 'react';
import styles from "./ProfileInfo.module.css";
import defaultAvatar from "../../../assets/ava.jpg";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatus/ProfileStatusHooks";


export const ProfileInfo = ({profile, status, updateUserStatus}) => {
    // debugger
    return (
        <div className={styles._}>
            {/*<div className={styles._img}>*/}
            {/*    /!*<img src="https://wiki.soiro.ru/images/Render.jpg" alt=""/>*!/*/}
            {/*</div>*/}

            <div className={styles._userInfo}>
                <img src={profile != null ? defaultAvatar : defaultAvatar}
                     alt={'Аватар пользователя'}/>
                <ProfileStatusHooks status={status}
                               updateUserStatus={updateUserStatus}/>
            </div>
        </div>

    );
}


