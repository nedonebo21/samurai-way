import React from 'react';
import {User} from "../../redux/store";
import {Button} from "../../shared/ui/button/button";
import {UserAvatar} from "../../shared/ui/user-avatar/user-avatar";
import s from './users.module.css'

type UsersType = {
    users: User[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: User[]) => void
}

export const Users = (props: UsersType) => {

    if (props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Pudge',
                status: 'looking for a job',
                avatarUrl: 'https://play-lh.googleusercontent.com/82HFnMT2VbR8wgl6_a17UppNiNvzmyafK0BJW4FW4h-CV4BZq2dGTisboxOYNYI5gLDe=w240-h480-rw',
                location: {
                    country: 'Russia', city: 'Ulyanovsk'
                }
            },
            {
                id: 2,
                followed: true,
                fullName: 'Morphling',
                status: 'looking for a boss',
                avatarUrl: 'https://dota2.ru/img/heroes/morphling/portrait.jpg',
                location: {
                    country: 'Russia', city: 'Moscow'
                }
            },
            {
                id: 3,
                followed: true,
                fullName: 'KOTL',
                status: 'looking for a friends',
                avatarUrl: 'https://preview.redd.it/ygt394pc4uz81.jpg?width=300&format=pjpg&auto=webp&s=931c83697822508002307f79ebb05da97537afa4',
                location: {
                    country: 'USA', city: 'Texas'
                }
            },
        ])
    }

    return (
        <div className={s.user_items}>
            {
                props.users.map(el => {
                    return (
                        <div className={s.user_item} key={el.id}>
                            <span className={s.user_action}>
                                <div>
                                    <UserAvatar avatarUrl={el.avatarUrl}/>
                                </div>
                                <div>
                                    {
                                        el.followed
                                            ? <Button onClick={() => {
                                                props.unFollow(el.id)
                                            }}>Unfollow</Button>
                                            : <Button onClick={() => {
                                                props.follow(el.id)
                                            }}>Follow</Button>
                                    }
                                </div>
                            </span>
                            <span className={s.user_description}>
                                <span className={s.user_info}>
                                    <div className={s.user_name}>{el.fullName}</div>
                                    <div className={s.user_status}>{el.status}</div>
                                </span>
                                <span className={s.user_location}>
                                    <div className={s.user_country}>{el.location.country}</div>
                                    <div className={s.user_city}>{el.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}