import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {MessagesPageType} from "../../redux/state";

export const Dialogs = ({messagesData, usersDialogsData}: MessagesPageType) => {

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