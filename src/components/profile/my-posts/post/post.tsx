import React from 'react';
import s from "./post.module.css";
import {PostsAvatar} from "../posts-avatar/posts-avatar";

type Props = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}:Props) => {
    return (
        <div className={s.item}>
            <PostsAvatar/>
            <div className={s.post_text}>{message}</div>
            <button>Like: <strong>{likesCount}</strong></button>
        </div>
    );
};