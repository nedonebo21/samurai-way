import React from 'react';
import s from './profile-avatar.module.css';
import defaultAvatar from "../../../assets/img/default-avatar.jpg";

export const ProfileAvatar = (props: any) => {
    return (
        <img className={s.img}
             src={
                 props.avatarUrl
                     ? props.avatarUrl
                     : defaultAvatar
             }
             alt="profileAvatar"/>
    );
};