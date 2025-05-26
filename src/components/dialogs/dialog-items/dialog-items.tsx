import React from 'react';
import s from "../dialogs.module.css";
import {DialogItem} from "./dialog-item/dialog-item";
import {UserDataType} from "../../../redux/state";

type Props = {
    usersDialogsData: UserDataType[]
}

export const DialogItems = (props: Props) => {
    const usersDialogsList = props.usersDialogsData
        .map((user) => (<DialogItem key={user.id} id={user.id} name={user.name} imgUrl={user.imgUrl}/>))


    const usersDialogsItems = props.usersDialogsData.length ? usersDialogsList
        : <p>No dialogs, you should find friends :)</p>


    return (
        <div className={s.dialogs_items}>
            {usersDialogsItems}
        </div>
    );
};
