import React from 'react';
import {Field} from "redux-form";


export const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter New Messgae"}/>
            </p>
            <button>Send message</button>
        </form>
    );
}
