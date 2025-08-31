import React from 'react';
import s from '../components/dialogs/ui/dialogs.module.css'
import {DialogsItemsContainer} from "../components/dialogs/ui/dialog-items/dialogs-items-container";
import {MessagesContainer} from "../components/dialogs/ui/messages/messages-container";


const DialogsPage = () => {

    return (
        <div className={s.dialogs}>
            <DialogsItemsContainer/>
            <MessagesContainer/>
        </div>
    )
}
export default DialogsPage