import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type UserDataType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}

export const Dialogs = () => {
    const usersDialogsData: UserDataType[] = [
        {id: "1", name: "Pudge"},
        {id: "2", name: "Morphling"},
        {id: "3", name: "KOTL"},
        {id: "4", name: "Viper"},
        {id: "5", name: "Phoenix"},
        {id: "6", name: "Ember"},
        {id: "7", name: "Storm"},
    ]
    const messagesData: MessageType[] = [
        {id: "1", message: "Yo"},
        {id: "2", message: "Its really your social network??"},
        {id: "3", message: "Do you like gachi cinema??"},
        {id: "4", message: "Yes."},
    ]

    const usersDialogsList = usersDialogsData
        .map((user) => (
            <DialogItem key={user.id} id={user.id} name={user.name}/>
        ))
    const messagesList = messagesData
        .map((message) => (
            <Message key={message.id} message={message.message}/>
        ))

    const usersDialogsItems = usersDialogsData.length ? usersDialogsList
        : <p>No dialogs, you should find friends :)</p>
    const messagesItems = messagesData.length ? messagesList
        : <p>No messages. Write smth to start dialog</p>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {usersDialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
        </div>
    );
};