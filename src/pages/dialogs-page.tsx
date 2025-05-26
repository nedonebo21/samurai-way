import React, {KeyboardEvent} from 'react';
import s from '../components/dialogs/dialogs.module.css'
import {DialogItem} from "../components/dialogs/dialog-item/dialog-item";
import {Message} from "../components/dialogs/message/message";
import {MessagesPageType} from "../redux/state";
import {Button} from "../shared/ui/button/button";
import {Textarea} from "../shared/ui/textarea/textarea";

export const DialogsPage = ({messagesData, usersDialogsData}: MessagesPageType) => {

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
        if (event.key === 'Enter') sendMessage()
    }
    const sendMessage = () => {
        const message = newMessage.current.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {usersDialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div className={s.send_message}>
                    <Textarea onKeyDown={handleKeyDown} value={''} onChange={() => {}} ref={newMessage} placeholder={"Пишем"}/>
                    <Button onClick={sendMessage}>Send</Button>
                </div>
            </div>
        </div>
    );
};