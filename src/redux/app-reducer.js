import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
};

const _setInitialized = (state) => {
    return {
        ...state,
        initialized: true
    };
};


export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return _setInitialized(state);
        default:
            return state
    }
}

export const initializedCuccess = () => ({
    type: SET_INITIALIZED
})


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedCuccess());
        });
}


