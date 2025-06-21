import React from 'react';
import s from './description.module.css'
import {ProfileAvatar} from "../../../../shared/ui/profile-avatar/profile-avatar";

export const Description = () => {
    return (
        <div className={s.description}>
            <ProfileAvatar/>
            <div className={s.info}>
                <strong>Info</strong>
                <div><strong>Name:</strong> Stanislav</div>
                <div><strong>BirthDay</strong>: 21.02.2005</div>
                <div><strong>Location</strong>: Russia, Ulyanovsk</div>
            </div>
        </div>
    );
};