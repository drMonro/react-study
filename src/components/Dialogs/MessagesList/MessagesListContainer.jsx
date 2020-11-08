import React from 'react';
import Message from "../Message/Message";
import {MessagesList} from "./MessagesList";
import {StoreContext} from "../../../StoreContext";


export const MessagesListContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();


                let messagesElements = state.dialogsPage.messagesData
                    .map(message => {
                            return <Message name={message.name} message={message.message}/>
                        }
                    );

                return <MessagesList messagesElements={messagesElements}/>;
            }
            }
        </StoreContext.Consumer>
    )
}
