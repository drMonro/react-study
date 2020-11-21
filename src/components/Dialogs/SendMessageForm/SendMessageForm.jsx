import React from 'react';
import {Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLengthValidator = maxLengthCreator(5)

export const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field component={Textarea} placeholder={"Enter New Messgae"}  name={"newMessageText"}
                       validate={[required, maxLengthValidator]}/>
            </p>
            <button>Send message</button>
        </form>
    );
}
