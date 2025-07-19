import React from 'react';
import s from "../dialogs.module.css";
import {DialogItem} from "./dialog-item/dialog-item";
import {MessagesPageType} from "../../../shared/types/state-types";
import {Redirect} from "react-router-dom";

type Props = {
    dialogsPage: MessagesPageType
    isAuth: boolean
}

export const DialogItems = (props: Props) => {
    const usersDialogsList = props.dialogsPage.usersDialogsData
        .map((user) => (<DialogItem key={user.id} id={user.id} name={user.name} imgUrl={user.imgUrl}/>))


    const usersDialogsItems = props.dialogsPage.usersDialogsData.length ? usersDialogsList
        : <p>No dialogs, you should find friends :)</p>

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs_items}>
            {usersDialogsItems}
        </div>
    );
};
