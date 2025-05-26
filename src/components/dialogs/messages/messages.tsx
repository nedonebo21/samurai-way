import React, {KeyboardEvent} from 'react';
import s from "../dialogs.module.css";
import {Textarea} from "../../../shared/ui/textarea/textarea";
import {Button} from "../../../shared/ui/button/button";
import {Message} from "./message/message";
import {ActionsType, MessageType} from "../../../redux/state";
import {addMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer"

type MessagesProps = {
    messagesData: MessageType[];
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

export const Messages = (props: MessagesProps) => {
    const {messagesData, dispatch} = props

    const messagesList = messagesData
        .map((message) => (<Message key={message.id} message={message.message}/>))
    const messagesItems = messagesData.length ? messagesList
        : <p>No messages. Write smth to start dialog</p>

    const newMessage = React.createRef<any>()

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') handleMessageSend()
    }
    const handleMessageSend = () => {
        dispatch(addMessageAC())
    }
    const handleMessageChange = () => {
        const text = newMessage.current.value
        const action = updateMessageTextAC(text)
        dispatch(action)
    }
    return (
        <div className={s.messages}>
            {messagesItems}
            <div className={s.send_message}>
                <Textarea onKeyDown={handleKeyDown} value={props.newMessageText} onChange={handleMessageChange}
                          ref={newMessage} placeholder={"Пишем"}/>
                <Button onClick={handleMessageSend}>Send</Button>
            </div>
        </div>
    );
};