import {reduxForm} from "redux-form";
import React from "react";
import {Field} from "redux-form";



const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field placeholder="Login" name={"login"} component={"input"}/>
            </p>
            <p>
                <Field placeholder="Password" name={"password"} component={"input"}/>
            </p>
            <p>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
                <span>Remember Me</span>
            </p>
            <button type={"submit"}>Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);
