import React from "react";
import s from './nav-bar.module.css'
import {NavLink} from "react-router-dom";
import {UserIcon} from "../../shared/ui/user-icon/user-icon";
import {SideBarType} from "../../shared/types/state-types";


export const NavBar = ({usersOnlineData}: SideBarType) => {

    const usersOnlineItems = usersOnlineData.map((user) => (
        user.isOnline ?
            <li className={s.friends_item} key={user.id}>
                <UserIcon avatarUrl={user.imgUrl}/>
                {user.name}
                <div className={s.online_circle}></div>
            </li> : null
    ))

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>

            <div className={s.friends_online}>
                <h3>Friends Online</h3>
                <ul className={s.friends_items}>
                    {usersOnlineItems}
                </ul>
            </div>
        </nav>
    )
}