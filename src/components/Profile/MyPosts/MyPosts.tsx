import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.posts_wrapper}>
            my posts
            <div>
                <textarea ></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={"Yo"}/>
                <Post message={"Its my social network!!!"}/>
            </div>
        </div>
    );
};