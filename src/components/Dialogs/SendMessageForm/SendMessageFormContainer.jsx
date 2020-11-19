import {reduxForm} from "redux-form";
import {SendMessageForm} from "./SendMessageForm";

export let SendMessageFormContainer = reduxForm({
    form: 'UserSendMessageForm'
})(SendMessageForm);

