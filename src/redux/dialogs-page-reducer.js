const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    newMessageText: '!!!'
};

const _updateNewMessageText = (state, newText) => {
    return {
        ...state,
        newMessageText: newText
    };
};

const _sendMessage = (state) => {
    return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, {id: 4, name: "Dimych", message: state.newMessageText}]
    };
};

export const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return _updateNewMessageText(state, action.newText);
        case SEND_MESSAGE:
            return _sendMessage(state);
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

