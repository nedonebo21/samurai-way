import React from 'react';
import s from "../dialogs.module.css";
import {DialogItem} from "./dialog-item/dialog-item";
import {MessagesPageType, UserDataType} from "../../../redux/store";

type Props = {
    dialogsPage: MessagesPageType
}

export const DialogItems = (props: Props) => {
    const usersDialogsList = props.dialogsPage.usersDialogsData
        .map((user) => (<DialogItem key={user.id} id={user.id} name={user.name} imgUrl={user.imgUrl}/>))


    const usersDialogsItems = props.dialogsPage.usersDialogsData.length ? usersDialogsList
        : <p>No dialogs, you should find friends :)</p>


    return (
        <div className={s.dialogs_items}>
            {usersDialogsItems}
        </div>
    );
};
