import React from 'react';
import s from './Description.module.css'

export const Description = () => {
    return (
        <div className={s.description}>
            <img
                src="https://i.ytimg.com/vi/qbxteW4kI6k/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGHEgOyhyMA8=&rs=AOn4CLDiLrIP6bTF4-NrmKQH970OwjNRsg"
                alt=""/>
            <div className={s.info}>
                <strong>Info</strong>
                <div><strong>Name:</strong> Stanislav</div>
                <div><strong>BirthDay</strong>: 21.02.2005</div>
                <div><strong>Location</strong>: Russia, Ulyanovsk</div>
            </div>
        </div>
    );
};