import {reduxForm} from "redux-form";
import React from "react";
import {Field} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import styles from './../common/FormsControls/FormsControls.module.css'



const LoginForm = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <Field placeholder="Login" name={"email"} component={Input}
                validate={[required]}/>
            </p>
            <p>
                <Field placeholder="Password" name={"password"} type={"password"} component={Input}
                       validate={[required]}/>
            </p>
            <p>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
                <span>Remember Me</span>
            </p>

            {error && <p className={styles._formError}>{error}</p>}

            <button type={"submit"}>Login</button>
        </form>
    )
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);
