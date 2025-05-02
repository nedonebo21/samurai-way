import React from 'react';
import s from './Description.module.css'
import {Avatar} from "../Avatar/Avatar";

export const Description = () => {
    return (
        <div className={s.description}>
            <Avatar/>
            <div className={s.info}>
                <strong>Info</strong>
                <div><strong>Name:</strong> Stanislav</div>
                <div><strong>BirthDay</strong>: 21.02.2005</div>
                <div><strong>Location</strong>: Russia, Ulyanovsk</div>
            </div>
        </div>
    );
};