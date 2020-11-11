import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogs-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";
import {usersPageReducer} from "./users-page-reducer";

let reducers = combineReducers({
    profilePage : profilePageReducer,
    dialogsPage : dialogsPageReducer,
    usersPage : usersPageReducer,
});

export let store = createStore(reducers);

window.state = store.getState();
