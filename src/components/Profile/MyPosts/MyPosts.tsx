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
                <Post likesCount={12} message={"Yo"}/>
                <Post likesCount={73} message={"Its my social network!!!"}/>
            </div>
        </div>
    );
};