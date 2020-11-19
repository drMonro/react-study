import {LoginReduxForm} from "./LoginForm";

export const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <p>LOGIN</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
