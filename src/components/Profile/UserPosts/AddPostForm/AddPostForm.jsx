import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const lengthValidator = maxLengthCreator(10);

export let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"} component={Textarea}
                   placeholder={"New post"}
                   validate={[required, lengthValidator]}/>
            <button>Add post</button>
        </form>
    )
}

