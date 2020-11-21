import {LoginReduxForm} from "./LoginForm";
import React from "react";
import {Redirect} from "react-router-dom";


export const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <p>LOGIN</p>
            <LoginReduxForm onSubmit={props.onSubmit}/>
        </div>
    );
}
