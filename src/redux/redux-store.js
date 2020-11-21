import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";
import {usersPageReducer} from "./users-page-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

let reducers = combineReducers({
    profilePage : profilePageReducer,
    dialogsPage : dialogsPageReducer,
    usersPage : usersPageReducer,
    auth : authReducer,
    form: formReducer,
    app: appReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.state = store.getState;
