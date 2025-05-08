import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <NavLink to={"/dialogs/1"} className={s.dialog + ' ' + s.active}>4el 1</NavLink>
                <NavLink to={"/dialogs/2"} className={s.dialog}>4el 2</NavLink>
                <NavLink to={"/dialogs/3"} className={s.dialog}>4el 3</NavLink>
                <NavLink to={"/dialogs/4"} className={s.dialog}>4el 4</NavLink>
                <NavLink to={"/dialogs/5"} className={s.dialog}>4el 5</NavLink>
                <NavLink to={"/dialogs/6"} className={s.dialog}>4el 6</NavLink>
                <NavLink to={"/dialogs/7"} className={s.dialog}>4el 7</NavLink>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Its really your social network</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};