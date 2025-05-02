import React from 'react';
import s from "./Post.module.css";
import {PostsAvatar} from "../PostsAvatar/PostsAvatar";

type Props = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}:Props) => {
    return (
        <div className={s.item}>
            <PostsAvatar/>
            {message}
            <button>Like: <strong>{likesCount}</strong></button>
        </div>
    );
};