import React from 'react';
import styles from "./Users.module.css";


export let UsersPaginator = ({totalUsersCount, pageSize, currentPage, onPaginationClick}) => {
    // debugger
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return (
        <ul className={styles._paginationList}>
            {pages.map(page => {
                return (
                    <li>
                        <button className={currentPage === page && styles._paginationItem__selected}
                                onClick={(e) => {
                                    onPaginationClick(page);
                                }}>
                            {page}
                        </button>
                    </li>
                )
            })}
        </ul>
    )

}
