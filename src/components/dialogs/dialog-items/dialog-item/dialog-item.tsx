import {NavLink} from "react-router-dom";
import s from "./dialog-item.module.css";
import a from "../../dialogs.module.css"
import React from "react";
import {UserAvatar} from "../../../../shared/ui/user-avatar/user-avatar";

type Props = {
    name: string
    id: string
    imgUrl: string
}
export const DialogItem = ({id, name, ...props}: Props) => {
    const pathId = `/dialogs/${id}`

    return (
        <NavLink to={pathId} className={s.dialog} activeClassName={a.active}>
            <UserAvatar avatarUrl={props.imgUrl}/>
            {name}
        </NavLink>
    )
}