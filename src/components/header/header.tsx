import React from "react";
import s from "./header.module.css"
import {NavLink} from "react-router-dom";
type HeaderType = {
  isAuth: boolean
  login: string | null
}
export const Header = ({isAuth, login}: HeaderType) => {
  return (
      <header className={s.header}>
        <img
            src="https://i.redd.it/free-svg-this-svg-from-anime-called-naruto-turn-it-from-low-v0-eoig0s8a5sh91.png?width=3500&format=png&auto=webp&s=1006757cc5fff6561f72581bf021962c4402b16d"
            alt=""/>
        <div className={s.loginBlock}>
          {
            isAuth
                ? <div className={s.userName}>{login}</div>
                : <NavLink to={'/login'} className={s.navLink}>Login</NavLink>
          }
        </div>
      </header>
  )
}