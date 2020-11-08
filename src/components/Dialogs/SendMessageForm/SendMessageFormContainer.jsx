import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-page-reducer";
import {SendMessageForm} from "./SendMessageForm";
import {StoreContext} from "../../../StoreContext";


export const SendMessageFormContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();


                let onNewMessageChange = (e) => {
                    let text = e.target.value;
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                return (
                    <SendMessageForm
                        newMessageText={state.dialogsPage.newMessageText}
                        updateMessageText={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                    />
                );
            }
            }
        </StoreContext.Consumer>
    )
}
