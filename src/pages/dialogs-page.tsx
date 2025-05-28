import React from 'react';
import s from '../components/dialogs/dialogs.module.css'
import {DialogsItemsContainer} from "../components/dialogs/dialog-items/dialogs-items-container";
import {MessagesContainer} from "../components/dialogs/messages/messages-container";


export const DialogsPage = () => {

    return (
        <div className={s.dialogs}>
            <DialogsItemsContainer/>
            <MessagesContainer/>
        </div>
    )
}