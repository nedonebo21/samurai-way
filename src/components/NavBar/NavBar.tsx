import React from "react";
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <a href="#">News</a>
            </div>
            <div className={s.item}>
                <a href="#">Music</a>
            </div>
            <div className={s.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}