import {connect} from "react-redux";
import {Login} from "./Login";
import {login} from "../../redux/auth-reducer";


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth

});

let mapDispatchToProps = (dispatch) => {
    const onSubmit = (formData) => {
        console.log(formData)
        dispatch(login(formData.email, formData.password, formData.rememberMe));
    }

    return {
        onSubmit: onSubmit
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

