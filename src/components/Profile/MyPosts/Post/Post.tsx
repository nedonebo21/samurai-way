import React from 'react';
import s from "./Post.module.css";
import {PostsAvatar} from "../PostsAvatar/PostsAvatar";

type PostMessageType = {
    message: string
}

export const Post = (props:PostMessageType) => {
    return (
        <div className={s.item}>
            <PostsAvatar/>
            {props.message}
            <button>Like</button>
        </div>
    );
};