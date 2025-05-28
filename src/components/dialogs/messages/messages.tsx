import React, {KeyboardEvent} from 'react';
import s from "../dialogs.module.css";
import {Textarea} from "../../../shared/ui/textarea/textarea";
import {Button} from "../../../shared/ui/button/button";
import {Message} from "./message/message";
import {ActionsType, MessagesPageType, MessageType} from "../../../redux/store";
import {addMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer"

type MessagesProps = {
    messageSend: () => void
    messageChange: (text: string) => void
    dialogsPage: MessagesPageType
}

export const Messages = (props: MessagesProps) => {
    const {dialogsPage} = props

    const messagesList = dialogsPage.messagesData
        .map((message) => (<Message key={message.id} message={message.message}/>))
    const messagesItems = dialogsPage.messagesData.length ? messagesList
        : <p>No messages. Write smth to start dialog</p>

    const newMessage = React.createRef<any>()

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') handleMessageSend()
    }
    const handleMessageSend = () => {
        props.messageSend()
    }
    const handleMessageChange = () => {
        const text = newMessage.current.value
        props.messageChange(text)
    }
    return (
        <div className={s.messages}>
            {messagesItems}
            <div className={s.send_message}>
                <Textarea onKeyDown={handleKeyDown} value={props.dialogsPage.newMessageText} onChange={handleMessageChange}
                          ref={newMessage} placeholder={"Пишем"}/>
                <Button onClick={handleMessageSend}>Send</Button>
            </div>
        </div>
    );
};