import React from 'react';
import Message from "../Message/Message";
import {MessagesList} from "./MessagesList";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    let messagesElements = state.dialogsPage.messagesData
        .map(message => {
                return <Message name={message.name} message={message.message} key={message.id}/>
            }
        );

    return {
        messagesElements: messagesElements
    }
}

export const MessagesListContainer = connect(mapStateToProps)(MessagesList);
