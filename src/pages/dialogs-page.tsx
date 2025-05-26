import React, {KeyboardEvent} from 'react';
import s from '../components/dialogs/dialogs.module.css'
import {DialogItem} from "../components/dialogs/dialog-item/dialog-item";
import {Message} from "../components/dialogs/message/message";
import {ActionsType, addMessageAC, MessagesPageType, updateMessageTextAC} from "../redux/state";
import {Button} from "../shared/ui/button/button";
import {Textarea} from "../shared/ui/textarea/textarea";

type MessagesPageProps = MessagesPageType & {
    dispatch: (action: ActionsType) => void
}

export const DialogsPage = (props: MessagesPageProps) => {
    const {messagesData, usersDialogsData, dispatch} = props
    const usersDialogsList = usersDialogsData
        .map((user) => (
            <DialogItem key={user.id} id={user.id} name={user.name} imgUrl={user.imgUrl}/>
        ))
    const messagesList = messagesData
        .map((message) => (
            <Message key={message.id} message={message.message}/>
        ))

    const usersDialogsItems = usersDialogsData.length ? usersDialogsList
        : <p>No dialogs, you should find friends :)</p>
    const messagesItems = messagesData.length ? messagesList
        : <p>No messages. Write smth to start dialog</p>

    const newMessage = React.createRef<any>()

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') handleMessageSend()
    }
    const handleMessageSend = () => {
        const message = newMessage.current.value
        dispatch(addMessageAC())
    }
    const handleMessageChange = () => {
        const text = newMessage.current.value
        const action = updateMessageTextAC(text)
        dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {usersDialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div className={s.send_message}>
                    <Textarea onKeyDown={handleKeyDown} value={props.newMessageData} onChange={handleMessageChange} ref={newMessage} placeholder={"Пишем"}/>
                    <Button onClick={handleMessageSend}>Send</Button>
                </div>
            </div>
        </div>
    );
};