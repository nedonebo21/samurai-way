import React from 'react';
import {User} from "../../redux/store";
import {Button} from "../../shared/ui/button/button";
import {UserAvatar} from "../../shared/ui/user-avatar/user-avatar";
import s from './users.module.css'
import axios from "axios";
import defaultAvatar from '../../assets/img/default-avatar.jpg';

type UsersType = {
    users: User[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: User[]) => void
}

export const Users = (props: UsersType) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    props.setUsers(res.data.items)
                })
        }
    }

    return (
        <div className={s.user_items}>
            <Button onClick={getUsers} className={s.users_button}>Show Users</Button>
            {
                props.users.map(el => {
                    return (
                        <div className={s.user_item} key={el.id}>
                            <span className={s.user_action}>
                                <div>
                                    <UserAvatar avatarUrl={el.photos.small !== null ? el.photos.small : defaultAvatar}/>
                                </div>
                                <div>
                                    {
                                        el.followed
                                            ? <Button onClick={() => {props.unFollow(el.id)}}>Unfollow</Button>
                                            : <Button onClick={() => {props.follow(el.id)}}>Follow</Button>
                                    }
                                </div>
                            </span>
                            <span className={s.user_description}>
                                <span className={s.user_info}>
                                    <div className={s.user_name}>{el.name}</div>
                                    <div className={s.user_status}>{el.status}</div>
                                </span>
                                <span className={s.user_location}>
                                    <div className={s.user_country}>{'el.location.country'}</div>
                                    <div className={s.user_city}>{'el.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}