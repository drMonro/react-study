import React from 'react';
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={styles._}>
            <img src="https://img2.pngindir.com/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg" alt=""/>
            <div className={styles._login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}
