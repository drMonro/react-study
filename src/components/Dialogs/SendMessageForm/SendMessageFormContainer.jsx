import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-page-reducer";
import {SendMessageForm} from "./SendMessageForm";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewMessageTextActionCreator(text));
    }

    let onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    return {
        updateMessageText: onNewMessageChange,
        sendMessage: onSendMessageClick
    }
}

export const SendMessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);
