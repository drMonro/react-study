import React from 'react';
import styles from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={styles._}>
            <div className={styles._img}>
                {/*<img src="https://wiki.soiro.ru/images/Render.jpg" alt=""/>*/}
            </div>

            <div className={styles._userInfo}>
                ava + desc
            </div>
        </div>

    );
}

export default ProfileInfo;
