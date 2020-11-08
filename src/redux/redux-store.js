import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";

let reducers = combineReducers({
    profilePage : profilePageReducer,
    dialogsPage : dialogsPageReducer
});

export let store = createStore(reducers);
