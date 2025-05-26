import React from 'react';
import s from "./post.module.css";
import {PostsAvatar} from "../posts-avatar/posts-avatar";
import {Button} from "../../../../shared/ui/button/button";

type Props = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}:Props) => {
    return (
        <div className={s.item}>
            <PostsAvatar/>
            <div className={s.post_text}>{message}</div>
            <Button onClick={() => {}}>Like: <strong>{likesCount}</strong></Button>
        </div>
    );
};