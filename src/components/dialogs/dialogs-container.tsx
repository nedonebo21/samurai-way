import {StoreType} from "../../redux/redux-store";
import s from "./dialogs.module.css";
import {DialogItems} from "./dialog-items/dialog-items";
import {Messages} from "./messages/messages";
import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";

export type MessagesContainerProps =  {
    store: StoreType
}

export const DialogsContainer = (props: MessagesContainerProps) => {
    let state = props.store.getState()

    const messageChange = (text: string) => {
        const action = updateMessageTextAC(text)
        props.store.dispatch(action)
    }
    const messageSend = () => {
        props.store.dispatch(addMessageAC())
    }

    return (
        <div className={s.dialogs}>
            <DialogItems usersDialogsData={state.DialogsPage.usersDialogsData}/>
            <Messages
                messageChange={messageChange}
                messageSend={messageSend}
                newMessageText={state.DialogsPage.newMessageText}
                messagesData={state.DialogsPage.messagesData} />
        </div>
    );
};