import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    name: string
    id: string
}

const DialogItem = ({id, name, ...props}: DialogPropsType) => {
    const pathId = `/dialogs/${id}`

    return (
        <NavLink to={pathId} className={s.dialog} activeClassName={s.active}>{name}</NavLink>
    )
}

type MessagePropsType = {
    message: string
}
const Message = ({message}: MessagePropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}

export const Dialogs = () => {
    const usersDialogsData = [
        {id: "1", name: "Pudge"},
        {id: "2", name: "Morphling"},
        {id: "3", name: "KOTL"},
        {id: "4", name: "Viper"},
        {id: "5", name: "Phoenix"},
        {id: "6", name: "Ember"},
        {id: "7", name: "Storm"},
    ]
    const messagesData = [
        {id: "1", text: "Yo"},
        {id: "2", text: "Its really your social network??"},
        {id: "3", text: "Do you like gachi cinema??"},
        {id: "4", text: "Yes."},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {usersDialogsData.map((user) => (
                    <DialogItem key={user.id} id={user.id} name={user.name}/>
                ))}
            </div>
            <div className={s.messages}>
                {messagesData.map((message) => (
                    <Message key={message.id} message={message.text}/>
                ))}
            </div>
        </div>
    );
};