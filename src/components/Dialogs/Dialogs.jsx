import React from 'react';
import styles from "./Dialogs.module.css";
import {RecipientsListContainer} from "./RecipientsList/RecipientsListContainer";
import {MessagesListContainer} from "./MessagesList/MessagesListContainer";
// import {SendMessageForm} from "./SendMessageForm/SendMessageForm";
import {SendMessageFormContainer} from "./SendMessageForm/SendMessageFormContainer";

const Dialogs = (props) => {

    // let state = props.store.getState();

    return (
        <div className={styles._}>
            <p className={styles._title}>Dialogs</p>
            <div className={styles._wrapper}>
                <div className={styles._recepientsColumn}>

                    <RecipientsListContainer/>

                </div>

                <div className={styles._dialogsColumn}>
                    <MessagesListContainer/>
                    <SendMessageFormContainer />

                </div>
            </div>
        </div>
    );
}

export default Dialogs;
