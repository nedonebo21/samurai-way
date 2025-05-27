import React from 'react';
import s from '../components/dialogs/dialogs.module.css'
import {ActionsType, MessagesPageType} from "../redux/store";
import {DialogItems} from "../components/dialogs/dialog-items/dialog-items";
import {Messages} from "../components/dialogs/messages/messages";
import {StoreType} from "../redux/redux-store";
import {DialogsContainer} from "../components/dialogs/dialogs-container";

export type MessagesPageProps =  {
    store: StoreType
}

export const DialogsPage = (props: MessagesPageProps) => {

    return (<DialogsContainer store={props.store}/>)
}