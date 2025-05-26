import React from 'react';
import s from '../components/dialogs/dialogs.module.css'
import {ActionsType, MessagesPageType} from "../redux/state";
import {DialogItems} from "../components/dialogs/dialog-items/dialog-items";
import {Messages} from "../components/dialogs/messages/messages";

export type MessagesPageProps = MessagesPageType & {
    dispatch: (action: ActionsType) => void
}

export const DialogsPage = (props: MessagesPageProps) => {
    const {messagesData, usersDialogsData, dispatch} = props

    return (
        <div className={s.dialogs}>
            <DialogItems usersDialogsData={usersDialogsData}/>
            <Messages newMessageText={props.newMessageText} messagesData={messagesData} dispatch={dispatch}/>
        </div>
    );
};