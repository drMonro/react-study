import React from 'react';
import styles from "./Dialogs.module.css";
import {RecipientsListContainer} from "./RecipientsList/RecipientsListContainer";
import {MessagesListContainer} from "./MessagesList/MessagesListContainer";
import {SendMessageFormContainer} from "./SendMessageForm/SendMessageFormContainer";

export const Dialogs = (props) => {
    return (
        <div className={styles._}>
            <p className={styles._title}>Dialogs</p>
            <div className={styles._wrapper}>
                <div className={styles._recepientsColumn}>

                    <RecipientsListContainer/>

                </div>

                <div className={styles._dialogsColumn}>
                    <MessagesListContainer/>
                    <SendMessageFormContainer onSubmit={props.onSendMessage}/>

                </div>
            </div>
        </div>
    );
}
