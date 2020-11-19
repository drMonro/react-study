import {reduxForm} from "redux-form";
import {AddPostForm} from "./AddPostForm";

export let AddPostFormContainer = reduxForm({
    form: 'ProfileAddPostFormContainer'
})(AddPostForm);
