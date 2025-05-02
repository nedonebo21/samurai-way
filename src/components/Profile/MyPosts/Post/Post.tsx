import React from 'react';
import s from "./Post.module.css";
import {PostsAvatar} from "../PostsAvatar/PostsAvatar";

export const Post = () => {
    return (
        <div className={s.item}>
            <PostsAvatar/>
            Yo
            <button>Like</button>
        </div>
    );
};