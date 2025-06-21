import React from 'react';
import s from './profile-avatar.module.css';

export const ProfileAvatar = (props: any) => {
    return (
        <img className={s.img}
             src={
                 props.avatarUrl
                     ? props.avatarUrl
                     : `https://i.ytimg.com/vi/qbxteW4kI6k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHEgOyhyMA8=&rs=AOn4CLDiLrIP6bTF4-NrmKQH970OwjNRsg`
             }
             alt="profileAvatar"/>
    );
};