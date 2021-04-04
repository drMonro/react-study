import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const _setUserData = (state, actionData) => {
    return {
        ...state,
        ...actionData
    };
};


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return _setUserData(state, action.data);
        default:
            return state
    }
}

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.authMe();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserDataActionCreator(id, login, email, true));
    }

}


export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataActionCreator(null, null, null, false));

    }
}
