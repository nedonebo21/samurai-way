import s from "./dialogs.module.css";
import {DialogItems} from "./dialog-items/dialog-items";
import {Messages} from "./messages/messages";
import React from "react";
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import {StoreContext} from "../../store-context";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()

                    const messageChange = (text: string) => {
                        const action = updateMessageTextAC(text)
                        store.dispatch(action)
                    }
                    const messageSend = () => {
                        store.dispatch(addMessageAC())
                    }

                    return (
                        <div className={s.dialogs}>
                            <DialogItems usersDialogsData={state.DialogsPage.usersDialogsData}/>
                            <Messages
                                messageChange={messageChange}
                                messageSend={messageSend}
                                newMessageText={state.DialogsPage.newMessageText}
                                messagesData={state.DialogsPage.messagesData}/>
                        </div>
                    )
                }

            }
        </StoreContext.Consumer>

    );
};