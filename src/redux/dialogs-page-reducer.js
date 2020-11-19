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

const _sendMessage = (state, newMessageText) => {
    return {
        ...state,
        newMessageText: '',
        messagesData: [...state.messagesData, {id: 4, name: "Dimych", message: newMessageText}]
    };
};

export const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return _sendMessage(state, action.newMessageText);
        default:
            return state;
    }
}


export const sendMessageActionCreator = (newMessageText) => ({
    type: SEND_MESSAGE,
    newMessageText:newMessageText
})


