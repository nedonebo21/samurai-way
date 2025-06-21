import {NavLink} from "react-router-dom";
import s from "./dialog-item.module.css";
import a from "../../dialogs.module.css"
import React from "react";
import {UserIcon} from "../../../../shared/ui/user-icon/user-icon";

type Props = {
    name: string
    id: string
    imgUrl: string
}
export const DialogItem = ({id, name, ...props}: Props) => {
    const pathId = `/dialogs/${id}`

    return (
        <NavLink to={pathId} className={s.dialog} activeClassName={a.active}>
            <UserIcon avatarUrl={props.imgUrl}/>
            {name}
        </NavLink>
    )
}