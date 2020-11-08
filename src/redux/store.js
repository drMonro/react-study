import {profilePageReducer} from "./profile-page-reducer";
import {dialogsPageReducer} from "./dialogs-page-reducer";

const store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'First react'},
                {id: 3, message: 'Making of SPA'}
            ],
            newPostText: 'kamasutra'
        },

        dialogsPage: {
            recipientsData: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Olga'},
                {id: 3, name: 'Ann'},
                {id: 4, name: 'ALex'},
                {id: 5, name: 'Roman'},
                {id: 6, name: 'Orkadiy'}
            ],
            messagesData: [
                {id: 1, name: 'Dimych', message: 'Dimych message1'},
                {id: 2, name: 'Dimych', message: 'Dimych message2'},
                {id: 3, name: 'Dimych', message: 'Dimych message3'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log("render")
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}



export default store;
