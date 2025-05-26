import {ActionsType, AddMessageActionType, MessagesPageType, MessageType, UpdateMessageTextType} from "./state";

export const DialogsReducer = (state: MessagesPageType,action: ActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: "5",
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            break;
        default:
            return state
    }
    return state
}

export const addMessageAC = ():AddMessageActionType => (
    {type: 'ADD-MESSAGE'}
)
export const updateMessageTextAC = (text:string):UpdateMessageTextType => (
    {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text}
)