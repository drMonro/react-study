import {LoginReduxForm} from "./LoginForm";
import Post from "../Profile/UserPosts/Post/Post";
import {addPostActionCreator} from "../../redux/profile-page-reducer";
import {connect} from "react-redux";
import {UserPosts} from "../Profile/UserPosts/UserPosts";
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




//
// export const Login = (props) => {
//     const onSubmit = (formData) => {
//         console.log(formData)
//     }
//
//     return (
//         <div>
//             <p>LOGIN</p>
//             <LoginReduxForm onSubmit={onSubmit}/>
//         </div>
//     )
// }
