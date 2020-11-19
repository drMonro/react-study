import {Field} from "redux-form";

export let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={"newPostText"} component={"textarea"}/>
            <button>Add post</button>
        </form>
    )
}

