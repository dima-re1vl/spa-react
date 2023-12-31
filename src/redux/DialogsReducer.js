export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });
export const updateNewMessageActionCreator = (text) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    message: text,
});

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: "Dmitriy" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Valera" },
        { id: 4, name: "Nikita" },
        { id: 5, name: "Misha" },
    ],
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Good, what about you?" },
        { id: 4, message: "Fine!" },
    ],
    newMessageText: ''
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessageText
                }],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.message
            }
        default:
            return {
                ...state
            }

    }
}

export default DialogsReducer;