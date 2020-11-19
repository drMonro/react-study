import {authAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};

const _setUserData = (state, actionData) => {
    return {
        ...state,
        ...actionData,
        isAuth: true
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

export const setAuthUserDataActionCreator = (data) => ({
    type: SET_USER_DATA,
    data:data
})


export const getAuthUserData = () => (dispatch) => {
    authAPI.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreator(response.data.data));
            }
        });

}
