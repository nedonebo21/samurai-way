import React from 'react';
import s from './user-icon.module.css'

type UserAvatarType = {
    avatarUrl: string
}
export const UserIcon = (props: UserAvatarType) => {
    return (
        <img className={s.user_icon} src={props.avatarUrl} alt="#"/>
    )
}