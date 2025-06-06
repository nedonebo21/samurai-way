import React from 'react';
import {UsersContainer} from "../components/users/users-container";
import s from '../components/users/users.module.css'

export const UsersPage = () => {
    return (
        <div className={s.users_page}>
            <h2>Users</h2>
            <UsersContainer/>
        </div>
    );
};
