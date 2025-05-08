import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import a from "../Dialogs.module.css"
import React from "react";

type Props = {
    name: string
    id: string
}
export const DialogItem = ({id, name, ...props}: Props) => {
    const pathId = `/dialogs/${id}`

    return (
        <NavLink to={pathId} className={s.dialog} activeClassName={a.active}>{name}</NavLink>
    )
}