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
        <NavLink to={pathId} activeClassName={s.active} className={s.dialog}>{name}</NavLink>
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem id={"1"} name={"4el 1"}/>
                <DialogItem id={"2"} name={"4el 2"}/>
                <DialogItem id={"3"} name={"4el 3"}/>
                <DialogItem id={"4"} name={"4el 4"}/>
                <DialogItem id={"5"} name={"4el 5"}/>
                <DialogItem id={"6"} name={"4el 6"}/>
                <DialogItem id={"7"} name={"4el 7"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Yo"} />
                <Message message={"Its really your social network"} />
                <Message message={"Yo"} />
            </div>
        </div>
    );
};