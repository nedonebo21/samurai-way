import React from 'react';
import s from './user-avatar.module.css'

type UserAvatarType = {
    avatarUrl: string
}
export const UserAvatar = (props: UserAvatarType) => {
    return (
        <img className={s.user_avatar} src={props.avatarUrl} alt="#"/>
    )
}